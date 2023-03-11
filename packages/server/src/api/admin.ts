import Application from 'koa';
import Router from 'koa-router';
import {
  PostLogin, getAdmin, postAdd, postPage, postDel
  , postDetailId, postEdit, CatePage, cateEdit, cateAdd, cateDel
} from '../src/controller/admin';
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
  ctx.body = await postAdd({ ...requestData, user: jwtChecks(ctx.request.header.token as string) });
});

router.post('/postPage', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await postPage(requestData);
});

router.post('/postDel', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await postDel(requestData);
});

router.post('/postDetailId', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await postDetailId(requestData);
});

router.post('/postEdit', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await postEdit({ ...requestData, user: jwtChecks(ctx.request.header.token as string) });
});

// 以上是文章页的

// 查询分类
router.post('/CatePage', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await CatePage(requestData);
});

// 修改分类
router.post('/cateEdit', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await cateEdit(requestData);
});

// 新增分类
router.post('/cateAdd', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await cateAdd(requestData);
});

// 删除分类
router.post('/cateDel', async (ctx: Application.ParameterizedContext) => {
  const requestData: any = ctx.request.body;
  ctx.body = await cateDel(requestData);
});

export default router;