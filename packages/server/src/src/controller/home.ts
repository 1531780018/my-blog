/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:45:13
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\src\controller\home.ts
 */

import prisma from "../config/prismaConfig"
import { HttpGetResp } from "@myblog/web/src/typings/global"

export const GetHome = async (): Promise<HttpGetResp> => {
  const getHome = await prisma.home.findMany({})
  if (getHome.length > 0) {
    return {
      code: 200,
      msg: "查询成功",
      data: getHome[0],
      status: true
    }
  } else {
    return {
      code: 500,
      msg: "查询失败",
      data: [],
      status: true
    }
  }
}