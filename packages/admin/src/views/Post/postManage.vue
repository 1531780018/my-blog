<template>
  <div class="manage">
    <n-card class="manage-content" title="" hoverable>
      <n-data-table :columns="columns" :data="state.dataList" :pagination="pagination" :bordered="false" />
    </n-card>
  </div>
</template>
<script lang="tsx" setup>
import { h, defineComponent, onMounted, reactive } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { postPage } from '@/api/api'


const pagination = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: false,//每页显示选项
  pageSizes: [10, 20, 30],
  itemCount: 100
})

const page = async () => {
  const resp = await postPage({
    pageCurr: pagination.page,
    pageSize: pagination.pageSize,

  })
  if (resp.data.code == 200) {
    state.dataList = resp.data.data.result
    pagination.itemCount = resp.data.data.pageCount

  }
}

const state = reactive({
  dataList: []
})

onMounted(() => {
  page()
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
        <n-button strong secondary type="primary">
          编辑
        </n-button>
        <n-button style='margin-left:10px' strong secondary type="error">
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

  .manage-content {
    height: 100%;
  }
}
</style>