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
import koaBodyParser from "koa-bodyparser";
import { getAllFilesExport } from './comm/uitls'
import colors from 'colors';
import { jwtChecks } from './comm/jwt'

class Init {
  public static app: Koa;
  public static server: http.Server;
  public static initCore(app: Koa, server: http.Server) {
    Init.app = app;
    Init.server = server;
    Init.initKoaBodyParser();
    Init.jwtCheck();
    Init.initLoadRouters();
  };
  public static async initKoaBodyParser() {
    Init.app.use(koaBodyParser());
  }
  public static async initLoadRouters() {
    const dirPath = path.join(`${process.cwd()}/src/api/`);
    getAllFilesExport(dirPath, (file: Router) => {
      Init.app.use(file.routes());
    });
    console.log(colors.rainbow('router.....yes'));
  }
  public static async jwtCheck() {
    console.log(8888);
    Init.app.use((ctx: Koa.Context, next: Function) => {
      const token = ctx.request.headers?.token as string;
      console.log(jwtChecks(token));

    })
  }
}

export default Init.initCore;