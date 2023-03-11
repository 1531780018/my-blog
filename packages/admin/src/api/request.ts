/*
 * @Author: Mowang
 * @Date: 2023-03-07 11:22:12
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\api\request.ts
 */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import store from "@/store/index";

const service = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    token: ""
  }
});

// Request interceptors
service.interceptors.request.use((config: any) => {
  // do something
  const header: any = {
    token: localStorage.getItem("token") || ""
  };
  config.headers = header;
  return config;
},
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.data.code == 401) {
      store.state['_value'].user.isLogin = false
      location.href = "#/";
    }
    // do something
    return response;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  }
);

export default service;
