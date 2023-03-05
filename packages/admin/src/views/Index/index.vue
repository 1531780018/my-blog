<!--
 * @Author: Mowang
 * @Date: 2023-03-05 20:00:00
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\views\Index\index.vue
-->
<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <n-menu v-model:value="state.activeKey" mode="horizontal" :options="menuOptions" />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;height:100%">
          左侧菜单
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          内容展示出口
        </n-layout-content>
      </n-layout>
      <n-layout-footer>底部</n-layout-footer>
    </n-layout>
  </n-space>
</template>
<script lang="tsx" setup>
import { reactive } from "vue"
const menuOptions = reactive([
  {
    label: '菜单1',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  }, {
    label: '菜单1',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  }, {
    label: '菜单2',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  }, {
    label: '菜单3',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  }, {
    label: '菜单4',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
])
const state = reactive(
  {
    activeKey: ""
  }
)
</script>
<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>