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
  page: Array
}

export declare interface HttpGetResp<D> {
  code: number
  status: boolean
  data: D | undefined
  msg: string
}


export declare interface PostSelect {
  cateId?: number // 分类ID
  pageSize: number // 每页显示条数
  pageCurr: number // 当前所在页码
  search?: string // 搜索关键字
}

export declare interface ResPostPage {
  pageCurr: number
  pageSize: number
  pageCount: number
  pageList: Array
}