/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:45:14
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\app.ts
 */
import Koa from 'koa';
import http from 'http';
import initCore from './Init'
import Config from './src/config/config'
import colors from 'colors';
import cors from 'koa2-cors';
const app = new Koa();

// 创建服务器
const server: http.Server = new http.Server(app.callback());
// 临时处理下跨域
app.use(cors());
// 执行初始化
initCore(app, server);

app.use(cors());

app.listen(Config.HTTP_PORT, () => {
  console.log(colors.rainbow(`Run.....yes port:${Config.HTTP_PORT}`));
  console.log(colors.rainbow(`http://localhost:${Config.HTTP_PORT}`));
})