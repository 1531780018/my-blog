<template>
  <div class="manage">
    <n-card class="manage-content" title="" hoverable>
      <n-button type="primary" @click="cateAddShow()">
        新增分类
      </n-button>

      <n-data-table :columns="columns" :data="state.dataList" :bordered="false" />
      <div class="rpage">
        <n-pagination :item-count="pagination.itemCount" :page="pagination.page" :page-sizes="pagination.pageSizes"
          :on-change="pagination.onChange" show-size-picker />
      </div>
    </n-card>

    <n-modal v-model:show="state.showModal" preset="dialog" title="Dialog">
      <template #header>
        <div> {{ state.isAdd == 0 ? '新增' : '编辑' }} 分类 </div>
      </template>
      <div>
        <n-form ref="formRef" :model="state.model" :rules="state.rules" label-placement="top">
          <n-grid :cols="24" :x-gap="24">
            <n-form-item-gi :span="16" label="分类名称" path="inputValue">
              <n-input v-model:value="state.model.name" placeholder="Input" />
            </n-form-item-gi>
            <n-form-item-gi :span="16" label="分类简介" path="inputValue">
              <n-input v-model:value="state.model.desc" placeholder="Input" />
            </n-form-item-gi>
          </n-grid>
        </n-form>
      </div>
      <template #action>
        <div>
          <n-button type="primary" @click="edit" v-if="state.isAdd == 1">
            提交编辑
          </n-button>
          <n-button type="primary" @click="add" v-if="state.isAdd == 0">
            提交新增
          </n-button>
        </div>
      </template>
    </n-modal>

  </div>
</template>
<script lang="tsx" setup>
import { h, defineComponent, onMounted, onUpdated, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { CatePage, cateEdit, cateAdd, cateDel } from '@/api/api'

const router = useRouter();

const fnPage = () => {
  CatePage({
    pageCurr: (pagination.page - 1) * pagination.pageSize,
    pageSize: (pagination.page - 1) + pagination.pageSize,
  }).then((resp) => {
    if (resp.data.code == 200) {
      state.dataList = resp.data.data.result
      pagination.itemCount = resp.data.data.pageCount
    }
  })
}

const cateAddShow = () => {
  state.showModal = true;
  state.tempData = {}
  state.isAdd = 0
  state.model = {
    name: "",
    desc: "",
    id: null
  }
}

const add = async () => {
  const resp = await cateAdd({
    ...state.model
  })
  if (resp.data.code == 200) {
    window.$message.success("新增成功!!")
    setTimeout(() => {
      location.reload();
    }, 3000)
  } else {
    window.$message.success("新增失败!!")
  }
}

const edit = async () => {
  const resp = await cateEdit({
    ...state.model
  })
  if (resp.data.code == 200) {
    window.$message.success("编辑成功!!")
    setTimeout(() => {
      location.reload();
    }, 3000)
  } else {
    window.$message.success("编辑失败!!")
  }
}

const pagination = reactive({
  page: 1,
  pageSize: 10,
  pageSizes: [10, 15],
  itemCount: 0,
  onChange: (page: number) => {
    pagination.page = page
    fnPage()
  },
})

const state = reactive({
  dataList: [],
  showModal: false,
  tempData: {}, // 暂存对象
  isAdd: 0, // 是否为新增 0为新增 1为编辑
  rules: {},
  model: {
    name: "",
    desc: "",
    id: null
  }
})

onMounted(() => {
  fnPage()
})


const columns = [{
  title: '分类ID',
  key: 'id'
},
{
  title: '分类名称',
  key: 'name'
},
{
  title: '分类描述',
  key: 'desc'
},
{
  title: '操作',
  key: '',
  render(row) {
    return (
      <div>
        <n-button strong secondary type="primary" onClick={() => {
          state.showModal = true;
          state.tempData = row
          state.isAdd = 1
          state.model = {
            id: row.id,
            desc: row.desc,
            name: row.name
          }
        }}>
          编辑
        </n-button>
        <n-button style='margin-left:10px' strong secondary type="error" onClick={() => {
          window.$dialog.warning({
            title: '警告',
            content: '是否要删除该分类？删除该分类将会删除该分类所有文章',
            positiveText: '确定',
            negativeText: '不确定',
            onPositiveClick: async () => {
              const respDel = await cateDel({ id: row.id })
              if (respDel.data.code == 200) {
                window.$message.success('删除成功')
                setTimeout(() => {
                  location.reload();
                }, 3000)
              } else {
                window.$message.error('删除失败')
              }
            },
            onNegativeClick: () => {
              window.$message.error('用户取消删除')
            }
          })
        }}>
          删除
        </n-button>
      </div>
    )
  }
},
]

</script>
<style lang="scss" scoped>
.manage {
  height: 100%;

  .rpage {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  .manage-content {
    height: 100%;
  }
}
</style>