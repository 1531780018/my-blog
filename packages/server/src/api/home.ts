import Application from 'koa';
import Router from 'koa-router';
import { GetHome, GetPostQuery } from '../src/controller/home';

const router = new Router({
  prefix: `/api/home`
});

router.get('/getHome', async (ctx: Application.ParameterizedContext) => {
  ctx.body = await GetHome();
});

router.get('/getPostPage', async (ctx: Application.ParameterizedContext) => {
  ctx.body = await GetPostQuery(1);
});

export default router;
