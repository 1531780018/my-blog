<template>
  <div id="App">
    <n-config-provider :theme="theme">
      <router-view @theme="themeToggle"></router-view>
    </n-config-provider>
  </div>
</template>
<script lang="tsx" setup>
import { ref } from 'vue'
import { useThemeVars, darkTheme } from 'naive-ui'
import { lte } from 'lodash';
// const theme = useThemeVars()
let theme = ref(null)
const themeToggle = (v: boolean) => {
  theme.value = v ? darkTheme : null
}
</script>