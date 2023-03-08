<!--
 * @Author: Mowang
 * @Date: 2023-03-05 20:00:00
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\views\Index\index.vue
-->
<template>
  <n-space vertical size="large">
    <n-layout has-sider style="height: 100%;position: absolute;width: 100%;">
      <n-layout-sider class="menu" bordered collapse-mode="width" :collapsed-width="64" :width="240"
        :collapsed="state.collapsed" show-trigger @collapse="state.collapsed = true" @expand="state.collapsed = false">
        <div class="logo">
          <n-h2 v-show="!state.collapsed">LOGO</n-h2>
          <n-h2 v-show="state.collapsed">L</n-h2>
        </div>
        <n-menu :collapsed="state.collapsed" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions2"
          :render-label="state.renderMenuLabel" :expand-icon="state.expandIcon" default-value="add-post" />
      </n-layout-sider>
      <div class="main">
        <n-layout-header class="main-flex-t">
          <div> <n-switch v-model:value="state.active" @change="themeChange" /> 主题颜色切换</div>
          <div> <n-button quaternary type="primary" @click="exitLogin()">
              退出登录
            </n-button> </div>

          <!-- <n-menu v-model:value="state.activeKey" mode="horizontal" :options="menuOptions" /> -->
        </n-layout-header>
        <n-layout-content class="main-flex-m">
          <router-view></router-view>
        </n-layout-content>
        <n-layout-footer class="main-flex-b">底部</n-layout-footer>
      </div>
    </n-layout>
  </n-space>
</template>
<script lang="tsx" setup>
import { NIcon } from 'naive-ui'
import { reactive, h, ref, defineComponent, defineEmits, Component } from "vue"
import type { MenuOption } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router'
import {
  DocumentOutline as PostAdd,
  BookOutline as BookIcon,
  Apps as AppsIcon,
  People as PeopleIcon,
  ChatbubbleEllipsesSharp as ChatIcon,
  PricetagsOutline as TagIcon,
  SettingsOutline as SetIcon
} from '@vicons/ionicons5'

const router = useRouter()

const exitLogin = () => {
  window.$dialog.warning({
    title: '警告',
    content: '是否退出登录？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      window.$message.success('退出成功')
      localStorage.clear();
      router.push({ name: 'index' })
    },
    onNegativeClick: () => {
      window.$message.error('用户取消退出')
    }
  })
}

const renderIcon = (icon: Component) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const emit = defineEmits(['theme'])
const themeChange = (v: boolean) => {
  emit("theme", v)
}
const menuOptions2: MenuOption[] = [
  {
    label: <RouterLink to="/admin/editPost">新建文章</RouterLink>,
    key: 'add-post',
    icon: renderIcon(PostAdd)
  },
  {
    label: <RouterLink to="/admin/postManage">文章管理</RouterLink>,
    icon: renderIcon(BookIcon)
  },
  {
    label: <RouterLink to="/admin/editPost">分类管理</RouterLink>,
    key: 'cate-manage',
    icon: renderIcon(AppsIcon)
  },
  {
    label: <RouterLink to="/admin/editPost">用户管理</RouterLink>,
    key: 'user-manage',
    icon: renderIcon(PeopleIcon)
  },
  {
    label: <RouterLink to="/admin/editPost">评论管理</RouterLink>,
    key: 'comment-manage',
    icon: renderIcon(ChatIcon)
  },
  {
    label: <RouterLink to="/admin/editPost">TAG管理</RouterLink>,
    key: 'tag-manage',
    icon: renderIcon(TagIcon)
  },
  {
    label: <RouterLink to="/admin/editPost">网站设置</RouterLink>,
    key: 'website',
    icon: renderIcon(SetIcon)
  }
]

const state = reactive(
  {
    active: false,
    activeKey: "add-post",
    collapsed: false,
    expandIcon: "",
    renderMenuLabel(option: MenuOption) {
      if ('href' in option) {
        return h(
          'a',
          { href: option.href, target: '_blank' },
          option.label as string
        )
      }
      return option.label as string
    },
  }
)
</script>
<style lang="scss" scoped>
.menu {
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    .n-h2 {
      margin: 10px 0px;
    }
  }
}

.main {
  display: flex;
  width: 100%;
  flex-direction: column;

  .main-flex-t {
    height: 50px;
    flex: 1;
    line-height: 62px;
    padding: 0px 2em;
    display: flex;
    justify-content: space-between;
  }

  .main-flex-m {
    padding: 24px;
    height: 80%;
  }

  .main-flex-b {
    flex: 1;
    height: 20%;
  }
}

.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  background-color: --n-color;
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>