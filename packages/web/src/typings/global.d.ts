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

export declare interface IFetchData<D> {
  url: String
  xx: D
}
export declare interface IFetchDatas {
  sb: String
}
