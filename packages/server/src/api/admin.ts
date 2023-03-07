import Application from 'koa';
import Router from 'koa-router';
import { PostLogin } from '../src/controller/admin';
import { PostSelect } from '../../../web/src/typings/global'

const router = new Router({
  prefix: `/api/admin`
});

router.post('/login', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await PostLogin(requestData);
});

export default router;