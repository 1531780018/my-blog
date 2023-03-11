/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:14:41
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\vite.config.ts
 */
import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    define: {
      'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) }
    },
    preview: {
      port: 8080,
      cors: true
    },
    build: {
      outDir: "../../dist/docs"
    }

  })
}

