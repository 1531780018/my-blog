<!--
 * @Author: Mowang
 * @Date: 2023-03-08 22:28:00
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\compontens\message.vue
-->

<template>
  <div></div>
</template>
 
<script>
import { defineComponent, getCurrentInstance } from "vue";
import { useDialog } from "naive-ui";
 
export default defineComponent({
  setup() {
    window.$dialog = useDialog();
  },
});
</script>