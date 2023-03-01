/*
 * @Author: Mowang
 * @Date: 2023-02-26 13:41:41
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\api\home.ts
 */
import Application from 'koa';
import Router from 'koa-router';
import { GetHome, GetPostQuery, GetPosts } from '../src/controller/home';
import { PostSelect } from '../../../web/src/typings/global'

const router = new Router({
  prefix: `/api/home`
});

router.post('/getHome', async (ctx: Application.ParameterizedContext) => {
  ctx.body = await GetHome();
});

router.post('/getPostPage', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await GetPostQuery(requestData);
});

router.get('/getPost', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.query;
  console.log(requestData);

  ctx.body = await GetPosts(requestData);
});
export default router;
