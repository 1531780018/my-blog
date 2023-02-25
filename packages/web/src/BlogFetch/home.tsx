import { HttpGetResp, RespHome, PostSelect } from '../typings/global'
import { UseQueryResult } from 'react-query'

const BaseUrl = process.env.VITE_APP_URL

export const getHome = async (): Promise<UseQueryResult> => {
  const response = await fetch(`${BaseUrl}/api/home/getHome`);
  if (!response.status) {
    const { message } = await response.json();
    throw new Error(message);
  }
  return response.json();
}


export const getPostPage = async (data: PostSelect): Promise<UseQueryResult> => {
  const response = await fetch(`${BaseUrl}/api/home/getPostPage?cateId=${data?.cateId}&pageCurr=${data.pageCurr}&pageSize=${data.pageSize}`);
  if (!response.status) {
    const { message } = await response.json();
    throw new Error(message);
  }
  return response.json();
}

