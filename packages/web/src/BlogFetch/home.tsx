import { HttpGetResp, RespHome } from '../typings/global'
import { UseQueryResult } from 'react-query'

const BaseUrl = process.env.VITE_APP_URL

export const getHome = async (): Promise<UseQueryResult> => {
  const response = await fetch(`${BaseUrl}/api/home/getHome`);
  if (!response.status) {
    const { message } = await response.json();
    throw new Error(message);
  }
  return await response.json();
}


export const getPostPage = async (): Promise<UseQueryResult> => {
  const response = await fetch(`${BaseUrl}/api/home/getPostPage`);
  if (!response.status) {
    const { message } = await response.json();
    throw new Error(message);
  }
  return await response.json();
}

