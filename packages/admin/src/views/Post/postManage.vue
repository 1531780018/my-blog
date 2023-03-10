<template>
  <div class="manage">
    <n-card class="manage-content" title="" hoverable>
      <n-data-table :columns="columns" :data="state.dataList" :bordered="false" />
      <div class="rpage">
        <n-pagination :item-count="pagination.itemCount" :page="pagination.page" :page-sizes="pagination.pageSizes"
          :on-change="pagination.onChange" show-size-picker />
      </div>

    </n-card>
  </div>
</template>
<script lang="tsx" setup>
import { h, defineComponent, onMounted, onUpdated, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { postPage, postDel } from '@/api/api'

const router = useRouter();

const fnPage = () => {
  postPage({
    pageCurr: (pagination.page - 1) * pagination.pageSize,
    pageSize: (pagination.page - 1) + pagination.pageSize,
  }).then((resp) => {
    if (resp.data.code == 200) {
      state.dataList = resp.data.data.result
      pagination.itemCount = resp.data.data.pageCount
    }
  })
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
  dataList: []
})

onMounted(() => {
  fnPage()
})


const columns = [{
  title: '文章ID',
  key: 'id'
},
{
  title: '文章标题',
  key: 'title'
}, {
  title: '作者',
  key: 'author.name'
},
{
  title: '快速链接',
  key: ''
}, {
  title: '操作',
  key: '',
  render(row) {
    return (
      <div>
        <n-button strong secondary type="primary" onClick={() => {
          router.push({
            name: "editPost",
            query: {
              type: 'edit',
              id: row.id
            }
          })
        }}>
          编辑
        </n-button>
        <n-button style='margin-left:10px' strong secondary type="error" onClick={() => {
          window.$dialog.warning({
            title: '警告',
            content: '是否要删除？',
            positiveText: '确定',
            negativeText: '不确定',
            onPositiveClick: async () => {
              const respDel = await postDel({ id: row.id })
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