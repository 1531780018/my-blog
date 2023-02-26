/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:45:13
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\src\controller\home.ts
 */

import prisma from "../config/prismaConfig"
import { HttpGetResp, RespHome, PageResult, PostSelect } from "@myblog/web/src/typings/global"
import { getDictObj } from '../../comm/uitls'

const postPage = async (skip: number, take: number): Promise<any> => {
  return await prisma.post.findMany({
    skip: skip,
    take: take,
    include: {
      author: true,
    },
  })
}

export const GetPostQuery = async (data: PostSelect): Promise<HttpGetResp<PageResult>> => {
  const pageCurr = data.pageCurr as string,
    pageSize = data.pageSize as string
  console.log(data.cateId);

  const getPostCount = await prisma.post.count() // 获取文章总数
  const pageResult = await prisma.post.findMany({
    skip: parseInt(pageCurr) || 0,
    take: parseInt(pageSize) || 10,
    where: {
      cateId: data.cateId ?? undefined,
      title: {
        contains: data.search,
      }
    },
    include: {
      author: true,
    },
  })
  return {
    code: 200,
    msg: "查询成功",
    data: {
      pageCount: getPostCount,
      result: pageResult
    },
    status: true,
  }
}

export const GetHome = async (): Promise<HttpGetResp<RespHome>> => {
  const getHome = await prisma.system.findMany({
    where: {
      class: 'home',
    }
  }); // 查询网站信息
  const getContacts = await prisma.system.findMany({
    where: {
      class: 'contacts',
    }
  }); // 查询联系方式
  const getCate = await prisma.categorize.findMany({}); // 查询所有分类
  const getPostCount = await prisma.post.count() // 获取文章总数
  const getPostAll = await postPage(0, 10) // 查询最新10篇文章 

  if (getHome.length > 0) {
    return {
      code: 200,
      msg: "查询成功",
      data: {
        home: await getDictObj(getHome),
        categorize: getCate,
        contacts: getContacts,
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