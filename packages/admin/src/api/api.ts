import request from './request'

// const baseUrl: string = 'http://localhost:2334'
console.log(process.env)
const baseUrl = process.env.VITE_APP_URL

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

export const postDel = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/postDel`,
    method: "post",
    data
  })
}


export const postDetailId = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/postDetailId`,
    method: "post",
    data
  })
}

export const postEdit = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/postEdit`,
    method: "post",
    data
  })
}

export const CatePage = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/CatePage`,
    method: "post",
    data
  })
}

export const cateEdit = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/cateEdit`,
    method: "post",
    data
  })
}

export const cateAdd = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/cateAdd`,
    method: "post",
    data
  })
}

export const cateDel = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/cateDel`,
    method: "post",
    data
  })
}