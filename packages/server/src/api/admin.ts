import Application from 'koa';
import Router from 'koa-router';
import { PostLogin, getAdmin, postAdd } from '../src/controller/admin';
import { PostSelect } from '../../../web/src/typings/global'
import { jwtChecks } from '../comm/jwt'

const router = new Router({
  prefix: `/api/admin`
});

router.post('/login', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  console.log(requestData)
  ctx.body = await PostLogin(requestData);
});

router.get('/getAdmin', async (ctx: Application.ParameterizedContext) => {
  ctx.body = await getAdmin();
});

router.post('/postAdd', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  console.log(ctx.request.header.token)
  console.log(jwtChecks(ctx.request.header.token as string));

  ctx.body = await postAdd({ ...requestData, user: jwtChecks(ctx.request.header.token as string) });
});

export default router;