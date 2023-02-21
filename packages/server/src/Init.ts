/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:45:14
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\Init.ts
 */
import Koa from 'koa';
import http from 'http';
import path from 'path';
import Router from 'koa-router';
import { getAllFilesExport } from './comm/uitls'
import colors from 'colors';
class Init {
  public static app: Koa;
  public static server: http.Server;
  public static initCore(app: Koa, server: http.Server) {
    Init.app = app;
    Init.server = server;
    Init.initLoadRouters();
  };
  public static async initLoadRouters() {
    const dirPath = path.join(`${process.cwd()}/src/api/`);
    getAllFilesExport(dirPath, (file: Router) => {
      Init.app.use(file.routes());
    });
    console.log(colors.rainbow('router.....yes'));
  }
}

export default Init.initCore;