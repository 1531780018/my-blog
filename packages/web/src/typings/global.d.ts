/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:14:28
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\typings\global.d.ts
 */
export declare interface Menu {
  icon: string
  title: string
  href: string
  name: string
}
export interface PageResult {
  pageCount: number
  result: Array
}

export declare interface RespHome {
  home: object
  categorize: Array
  statis: object,
  page: Array,
  contacts: Array
}

export declare interface HttpGetResp<D> {
  code: number
  status: boolean
  data: D | undefined
  msg: string
}

export declare interface userPanelCount<D> {
  Statis?: D
}

export declare interface StatisCount {
  postCount?: string
}


export declare interface postDetail {
  id: number | string
}

export declare interface PostSelect {
  cateId?: number  // 分类ID
  pageSize?: number  // 每页显示条数
  pageCurr?: number  // 当前所在页码
  search?: string // 搜索关键字
}

export declare interface ResPostPage {
  pageCurr: number
  pageSize: number
  pageCount: number
  pageList: Array
}

export declare interface IPost {
  title: string // 文章标题
  id: number // 文章id
  cover: string // 文章封面图
  author: any
}
export declare interface ICate {
  name: string // 文章标题
  id: number | string // 文章id
}
export declare interface IDict {
  key: string // 文章标题
  Value: number // 文章id
}

export declare interface Login {
  email: string // 文章标题
  password: string // 文章id
}

export declare interface LoginResp {
  token: string // 文章标题
  userInfo: Object // 文章id
}
export declare interface getAdminResp {
  catelist: Array,
  website: Array
}