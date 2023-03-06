/*
 * @Author: Mowang
 * @Date: 2023-03-04 19:09:18
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\main.ts
 */
import { createApp } from "vue";
import router from './router/index'
import App from './App.vue';
import naiveui from 'naive-ui'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
const app = createApp(App)
app.use(naiveui)
app.use(router).mount("#root")