import Application from 'koa';
import Router from 'koa-router';
import { GetHome, GetPostQuery } from '../src/controller/home';
import { PostSelect } from '../../../web/src/typings/global'

const router = new Router({
  prefix: `/api/home`
});

router.get('/getHome', async (ctx: Application.ParameterizedContext) => {
  ctx.body = await GetHome();
});

router.get('/getPostPage', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.query;
  console.log(123123, requestData);

  ctx.body = await GetPostQuery(requestData);
});

export default router;
