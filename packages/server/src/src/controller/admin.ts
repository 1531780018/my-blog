/*
 * @Author: Mowang
 * @Date: 2023-03-07 20:39:45
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\src\controller\admin.ts
 */
import prisma from "../config/prismaConfig"
import { HttpGetResp, Login, LoginResp, getAdminResp } from "@myblog/web/src/typings/global"
import { dataFormat } from '../../comm/uitls'
import { jwtSign } from '../../comm/jwt'

// 登录接口
export const PostLogin = async (data: Login): Promise<HttpGetResp<LoginResp>> => {
  const GetUser = await prisma.user.findMany({
    where: {
      email: data.email,
      password: data.password
    }
  })
  if (GetUser.length > 0) {
    return {
      code: 200,
      msg: "查询成功",
      data: {
        token: jwtSign({ userId: GetUser[0].id }),
        userInfo: GetUser[0]
      },
      status: true
    }
  } else {
    return {
      code: 500,
      msg: "登录失败",
      data: undefined,
      status: false
    }
  }
}

// 查询字典信息
export const getAdmin = async (): Promise<HttpGetResp<getAdminResp>> => {
  const cateList = await prisma.categorize.findMany({})
  const webSite = await prisma.system.findMany({})
  return {
    code: 200,
    msg: "查询成功",
    data: {
      catelist: cateList,
      website: webSite
    },
    status: true
  }
}