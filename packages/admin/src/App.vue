<template>
  <div id="App">
    <NMessageProvider>
      <messageApi />
    </NMessageProvider>
    <NDialogProvider>
      <dialogApi />
    </NDialogProvider>
    <n-config-provider :theme="theme">
      <router-view @theme="themeToggle"></router-view>
    </n-config-provider>
  </div>
</template>
<script lang="tsx" setup>
import { ref, onMounted } from 'vue'
import messageApi from '@/components/message.vue';
import dialogApi from '@/components/dialog.vue';
import { getAdmin } from '@/api/api'
import { uesAppStore } from '@/store/app'
import { uesUserStore } from '@/store/user'
import { useThemeVars, darkTheme, NMessageProvider, NDialogProvider } from 'naive-ui'

const appStore = uesAppStore()
const userStore = uesUserStore()
// const theme = useThemeVars()
let theme = ref(null)
const themeToggle = (v: boolean) => {
  theme.value = v ? darkTheme : null
}

// 持久化数据的处理
onMounted(async () => {
  if (!appStore.isDict && !userStore.isLogin) {
    const getAdminRes = await getAdmin({});
    if (getAdminRes.data.code == 200) {
      console.log("加载字典")
      const data = getAdminRes.data.data;
      appStore.setDict({
        catelist: data.catelist,
        website: data.website
      })
    }
  }


})


</script>