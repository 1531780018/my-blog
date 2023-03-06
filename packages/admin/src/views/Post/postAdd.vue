<!--
 * @Author: Mowang
 * @Date: 2023-03-06 21:13:15
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\views\post\postAdd.vue
-->
<template>
  <div class="post">
    <n-form ref="formRef" :label-width="80" :model="state.form" :rules="state.rules">
      <n-grid cols="4" x-gap="12" item-responsive>
        <!-- 左侧文章编辑 -->
        <n-grid-item span="0 300:1 500:2 700:3">
          <n-card title="" hoverable>
            <n-form-item label="文章标题" path="user.name" style="width: 100%;">
              <n-input v-model:value="state.form.title" size="large" placeholder="请输入标题" />
            </n-form-item>
            <n-form-item label="文章标题" path="user.name" style="width: 100%;">
              <div class="editContent">
                <editor api-key="no-api-key" :init="tinymceInit" />
              </div>
            </n-form-item>
          </n-card>
        </n-grid-item>
        <n-grid-item>
          <!-- 右侧保存 -->
          <div class="rightSubmit">
            <n-card title="" class="right-box" hoverable>
              <div class="submits">
                <n-button type="primary">保存文章</n-button>
              </div>
              <n-form-item label="选择分类" path="user.name" style="width: 100%;">
                <n-select v-model:value="state.form.cate" :options="options" />
              </n-form-item>
              <n-form-item label="TAG" path="user.name" style="width: 100%;">
                <n-dynamic-tags v-model:value="tags" />
              </n-form-item>
              <n-form-item label="设置封面" path="user.name" style="width: 100%;">
                封面是考虑自动获取文章内的图片生成缩略图还是手动上传?
              </n-form-item>
            </n-card>
          </div>

        </n-grid-item>
      </n-grid>
    </n-form>
  </div>
</template>
<script lang="tsx" setup>
import { reactive, ref } from 'vue';
import Editor from '@tinymce/tinymce-vue'
const tinymceInit = {
  selector: '#textarea1',
  plugins: 'code',
  width: "100%",
  language: 'zh_CN',//注意大小写
  language_url: '/tinymce/langs/zh_CN.js',
  height: 600,
}
const tags = ref(['文章', '新闻'])
const options = [
  {
    label: '测试分类1',
    value: 'song8'
  }, {
    label: '测试分类2',
    value: 'song8'
  }, {
    label: '测试分类3',
    value: 'song8'
  }, {
    label: '测试分类4',
    value: 'song8'
  },
]
const state = reactive({
  form: {
    title: "",
    content: "",
    cate: ""
  },
  rules: {

  }
})
const tinymceSetup = () => {

}
</script>
<style lang="scss" scoped>
.n-layout-scroll-container {
  overflow-x: initial;
}

.post {
  overflow: hidden;

}

.rightSubmit {
  height: 100%;

  .submits {
    margin-bottom: 20px;
  }

  .right-box {
    height: 100%;
  }

}

.editContent {
  width: 100%;
}
</style>