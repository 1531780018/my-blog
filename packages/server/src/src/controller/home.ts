/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:45:13
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\src\controller\home.ts
 */

import prisma from "../config/prismaConfig"
import { HttpGetResp, RespHome, PageResult } from "@myblog/web/src/typings/global"

const postPage = async (skip: number, take: number): Promise<any> => {
  return await prisma.post.findMany({
    skip: skip,
    take: take,
  })
}

export const GetPostQuery = async (page: number | string): Promise<HttpGetResp<PageResult>> => {
  const getPostCount = await prisma.post.count() // 获取文章总数
  const pageResult = await postPage(1, 10)
  return {
    code: 200,
    msg: "查询成功",
    data: {
      pageCount: getPostCount,
      result: pageResult
    },
    status: false,
  }
}

export const GetHome = async (): Promise<HttpGetResp<RespHome>> => {
  const getHome = await prisma.home.findMany({}); // 查询网站信息
  const getCate = await prisma.categorize.findMany({}); // 查询所有分类
  const getPostCount = await prisma.post.count() // 获取文章总数
  const getPostAll = await postPage(0, 10) // 查询最新10篇文章

  if (getHome.length > 0) {
    return {
      code: 200,
      msg: "查询成功",
      data: {
        home: getHome[0],
        categorize: getCate,
        statis: {
          postCount: getPostCount
        },
        page: getPostAll
      },
      status: true
    }
  } else {
    return {
      code: 500,
      msg: "查询失败",
      data: undefined,
      status: false
    }
  }
}