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
import { ref } from 'vue'
import messageApi from '@/components/message.vue';
import dialogApi from '@/components/dialog.vue';
import { useThemeVars, darkTheme, NMessageProvider, NDialogProvider } from 'naive-ui'

// const theme = useThemeVars()
let theme = ref(null)
const themeToggle = (v: boolean) => {
  theme.value = v ? darkTheme : null
}
</script>