<template>
  <div class="manage">
    <n-card class="manage-content" title="" hoverable>
      <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />
    </n-card>
  </div>
</template>
<script lang="tsx" setup>
import { h, defineComponent } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
const columns = [{
  title: '文章ID',
  key: 'no'
},
{
  title: '文章标题',
  key: 'title'
}, {
  title: '作者',
  key: 'title'
},
{
  title: '快速链接',
  key: 'title'
}, {
  title: '操作',
  key: 'title',
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
const data = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]
const pagination = { pageSize: 10 }
</script>
<style lang="scss" scoped>
.manage {
  height: 100%;

  .manage-content {
    height: 100%;
  }
}
</style>