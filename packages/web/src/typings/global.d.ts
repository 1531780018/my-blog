export interface Menu {
  icon: string
  title: string
  href: string
  name: string
}

export interface HttpGetResp {
  code: number
  status: boolean
  data: object
  msg: string
}