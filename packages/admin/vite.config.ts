/*
 * @Author: Mowang
 * @Date: 2023-03-05 19:10:11
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
const path = require("path")

export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})