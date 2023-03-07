import request from './request'

const baseUrl: string = 'http://localhost:2334'

interface AllType {
}
export const login = async (data: AllType) => {
  return request({
    url: `${baseUrl}/api/admin/login`,
    method: "post",
    data
  });
}