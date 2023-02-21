import Application from 'koa';
import Router from 'koa-router';
import { GetHome } from '../src/controller/home';

const router = new Router({
  prefix: `/api/home`
});

router.get('/test', async (ctx: Application.ParameterizedContext) => {
  ctx.body = await GetHome();
});

export default router;
