/*
 * @Author: Mowang
 * @Date: 2023-03-05 19:10:11
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite';
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
const path = require("path")

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [vue(), vueJsx()],
    define: {
      'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) }
    },
    base: "/admin/",
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: "../../dist/docs/admin"
    }
  })
}