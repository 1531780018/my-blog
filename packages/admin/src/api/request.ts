/*
 * @Author: Mowang
 * @Date: 2023-03-07 11:22:12
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\api\request.ts
 */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

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
    if (response.data.state == 401) {
      location.href = "/login";
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
