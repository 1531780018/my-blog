import request from './request'

const baseUrl: string = 'http://localhost:2334'

interface AllType {
}
// 登录接口
export const login = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/login`,
    method: "post",
    data
  });
}

export const getAdmin = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/getAdmin`,
    method: "get"
  })
}

export const postAdd = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/postAdd`,
    method: "post",
    data
  })
}

export const postPage = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/postPage`,
    method: "post",
    data
  })
}