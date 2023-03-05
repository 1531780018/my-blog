<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>
<script lang="tsx" setup>
import { useThemeVars } from 'naive-ui'
const theme = useThemeVars()
</script>