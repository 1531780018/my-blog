import Koa from 'koa';
import http from 'http';
import initCore from './Init'
import Config from './src/config/config'
import colors from 'colors';
const app = new Koa();

// 创建服务器
const server: http.Server = new http.Server(app.callback());

// 执行初始化
initCore(app, server);

app.listen(Config.HTTP_PORT, () => {
  console.log(colors.rainbow(`Run.....yes port:${Config.HTTP_PORT}`));
  console.log(colors.rainbow(`http://localhost:${Config.HTTP_PORT}`));
})