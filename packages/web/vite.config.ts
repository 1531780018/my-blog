/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:14:41
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \My-blog\vite.config.ts
 */
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
})