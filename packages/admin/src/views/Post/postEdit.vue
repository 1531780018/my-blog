<!--
 * @Author: Mowang
 * @Date: 2023-03-06 21:13:15
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\views\Post\postEdit.vue
-->
<template>
  <div class="post">
    <n-form ref="formRef" :label-width="80" :model="state" :rules="state.rules">
      <n-grid cols="4" x-gap="12" item-responsive>
        <!-- 左侧文章编辑 -->
        <n-grid-item span="0 300:1 500:2 700:3">
          <n-card title="" hoverable>
            <n-form-item label="文章标题" path="form.title" style="width: 100%;">
              <n-input v-model:value="state.form.title" size="large" placeholder="请输入标题" />
            </n-form-item>
            <n-form-item label="文章内容" path="form.content" style="width: 100%;">
              <div class="editContent">
                <div style="border: 1px solid #ccc">
                  <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                    mode="default" />
                  <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                    mode="default" @onCreated="handleCreated" />
                </div>
              </div>
            </n-form-item>
          </n-card>
        </n-grid-item>
        <!-- 右侧保存 -->
        <n-grid-item>
          <div class="rightSubmit">
            <n-card title="" class="right-box" hoverable>
              <div class="submits">
                <n-button v-if="route.query.type == 'edit'" type="primary" @click="postEditSubmit()">保存文章</n-button>
                <n-button type="primary" @click="postSubmit()" v-else>保存文章</n-button>
              </div>
              <n-form-item label="选择分类" path="form.cate" style="width: 100%;">
                <n-select v-model:value="state.form.cate" value-field="id" label-field="name" :options="options" />
              </n-form-item>
              <n-form-item label="TAG" style="width: 100%;">
                <n-dynamic-tags v-model:value="tags" />
              </n-form-item>
              <n-form-item label="设置封面" style="width: 100%;">
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
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { reactive, ref, shallowRef, onMounted, onBeforeUnmount, watch } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { uesAppStore } from '@/store/app';
import { useRoute } from 'vue-router'
import { postAdd, postDetailId, postEdit } from '@/api/api'
const route = useRoute();
const appStore = uesAppStore();
const formRef = ref()

watch(
  () => route.query.id,
  () => {
    location.reload();
  }
);


// 从字典里读取所有分类
const options = appStore.cateList;

const editorRef = shallowRef()

// 文章提交
const postSubmit = async () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const postRes = await postAdd({
        title: state.form.title,
        content: valueHtml.value,
        cateId: state.form.cate
      });
      if (postRes.data.code == 200) {
        window.$message.success("新增成功!!")
        setTimeout(() => {
          location.reload();
        }, 3000)
      } else {
        window.$message.error("新增失败,检查异常")
      }
    } else {
      window.$message.error('Invalid')
    }
  })

}

// 文章编辑

const postEditSubmit = async () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const postRes = await postEdit({
        id: state.form.id,
        title: state.form.title,
        content: valueHtml.value,
        cateId: state.form.cate
      });
      if (postRes.data.code == 200) {
        window.$message.success("编辑成功!!")
        setTimeout(() => {
          location.reload();
        }, 3000)
      } else {
        window.$message.error("编辑失败,检查异常")
      }
    } else {
      window.$message.error('Invalid')
    }
  })
}

// 内容 HTML
const valueHtml = ref('')

// 模拟 ajax 异步获取内容
onMounted(async () => {
  // 如果是编辑的话
  if (route.query.type == 'edit') {
    const id = route.query.id;
    const respDetail = await postDetailId({ id: id });
    if (respDetail.data.code == 200) {
      const data = respDetail.data.data;
      valueHtml.value = data.content;
      state.form.title = data.title;
      state.form.id = data.id;
      state.form.cate = data.cateId
    }
  }
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const tags = ref(['文章', '新闻'])

const state = reactive({
  form: {
    id: null,
    title: "",
    content: "",
    cate: ""
  },
  rules: {
    form: {
      title: {
        required: true,
        trigger: 'blur'
      },
      content: {
        required: true,
        trigger: 'blur'
      },
      cate: {
        required: true,
        trigger: 'blur'
      }
    }
  }
})
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