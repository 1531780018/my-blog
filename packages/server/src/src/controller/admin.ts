/*
 * @Author: Mowang
 * @Date: 2023-03-07 20:39:45
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\src\controller\admin.ts
 */
import prisma from "../config/prismaConfig"
import { HttpGetResp, Login, LoginResp, getAdminResp, PostAdd, PostSelect, PageResult, CateSelect } from "@myblog/web/src/typings/global"
import { dataFormat } from '../../comm/uitls'
import { jwtSign } from '../../comm/jwt'

// 登录接口
export const PostLogin = async (data: Login): Promise<HttpGetResp<LoginResp>> => {
  console.log(data);

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

export const postAdd = async (data: PostAdd): Promise<HttpGetResp<getAdminResp>> => {
  const postAdd = await prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      categorize: {
        connect: {
          id: data.cateId
        }
      },
      author: {
        connect: {
          id: data.user.userId
        }
      }
    }
  })

  if (postAdd) {
    return {
      code: 200,
      msg: "新增成功",
      data: undefined,
      status: true
    }
  } else {
    return {
      code: 500,
      msg: "新增失败",
      data: undefined,
      status: false
    }
  }
}

export const postPage = async (data: PostSelect): Promise<HttpGetResp<PageResult>> => {
  const getPostCount = await prisma.post.count(
    {
      where: {
        cateId: dataFormat(data.cateId),
        title: dataFormat(data.search)
      }
    }
  )
  // 获取文章总数
  const pageResult = await prisma.post.findMany({
    skip: dataFormat(data.pageCurr) || 0,
    take: dataFormat(data.pageSize) || 10,
    where: {
      cateId: dataFormat(data.cateId),
      title: dataFormat(data.search)
    },
    orderBy: [
      {
        id: 'desc',
      }
    ],
    include: {
      author: true
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

// 删除文章
export const postDel = async (data: { id: string }): Promise<HttpGetResp<PageResult>> => {
  const delResult = await prisma.post.deleteMany(
    {
      where: {
        id: data.id,
      }
    }
  )
  if (delResult.count > 0) {
    return {
      code: 200,
      msg: "删除成功",
      data: undefined,
      status: true,
    }
  } else {
    return {
      code: 500,
      msg: "删除失败",
      data: undefined,
      status: false,
    }
  }
}

// 查询单个详情的数据 --- 详情用
export const postDetailId = async (data: { id: string }): Promise<HttpGetResp<PageResult>> => {
  const result = await prisma.post.findUnique(
    {
      where: {
        id: Number(data.id),
      }
    }
  )
  if (result) {
    return {
      code: 200,
      msg: "查询成功",
      data: result,
      status: true,
    }
  } else {
    return {
      code: 500,
      msg: "查询失败",
      data: undefined,
      status: false,
    }
  }

}

// 文章编辑

export const postEdit = async (data: PostAdd): Promise<HttpGetResp<getAdminResp>> => {
  const postAdd = await prisma.post.update({
    data: {
      title: data.title,
      content: data.content,
      categorize: {
        connect: {
          id: data.cateId
        }
      },
      author: {
        connect: {
          id: data.user.userId
        }
      }
    },
    where: {
      id: data.id
    }
  })

  if (postAdd) {
    return {
      code: 200,
      msg: "修改成功",
      data: undefined,
      status: true
    }
  } else {
    return {
      code: 500,
      msg: "修改失败",
      data: undefined,
      status: false
    }
  }
}

// 查询分类

export const CatePage = async (data: CateSelect): Promise<HttpGetResp<PageResult>> => {
  const getPostCount = await prisma.categorize.count(
    {
      where: {
        id: dataFormat(data.id),
        name: dataFormat(data.name)
      }
    }
  )
  // 获取文章总数
  const pageResult = await prisma.categorize.findMany({
    skip: dataFormat(data.pageCurr) || 0,
    take: dataFormat(data.pageSize) || 10,
    where: {
      id: dataFormat(data.id),
      name: dataFormat(data.name)
    },
    orderBy: [
      {
        id: 'asc',
      }
    ],
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