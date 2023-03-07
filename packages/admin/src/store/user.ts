import { defineStore } from 'pinia';
import { SetUser } from '../types/user'

export const uesUserStore = defineStore({
  id: "id", // id为必填
  state: () => {
    return {
      userInfo: {},
      token: {}
    }
  },
  actions: {
    setUserInfo(data: SetUser) {
      this.token = data.token;
      this.userInfo = data.userInfo;
      localStorage.setItem("userInfo", JSON.stringify(data.userInfo));
      localStorage.setItem("token", data.token);
    }
  }
})