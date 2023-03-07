<template>
  <div class="login">
    <div class="login-content">
      <div class="content">
        <n-card hoverable>
          <div class="login-form">
            <n-form ref="formRef" :model="state.model" :rules="state.rules">
              <n-form-item path="age" label="用户名">
                <n-input v-model:value="state.model.username" @keydown.enter.prevent />
              </n-form-item>
              <n-form-item path="password" label="密码">
                <n-input v-model:value="state.model.password" type="password" @keydown.enter.prevent />
              </n-form-item>
              <div>
                <n-button type="info" style="width:100%"> 登录 </n-button>
              </div>
            </n-form>
          </div>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script lang="tsx" setup>
import { reactive } from 'vue';
const state = reactive({
  model: {
    username: "",
    password: ""
  },
  rules: {

  }
})
</script>
<style lang="scss" scoped>
.login {
  background-image: url(@/assets/bg.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: absolute;

  .login-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .content {
      width: 400px;
      padding: 30px 20px;
    }
  }

  .login-form {}
}
</style>