/*
 * @Author: Mowang
 * @Date: 2023-02-23 12:56:05
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\BlogFetch\home.tsx
 */
import { HttpGetResp, RespHome, PostSelect } from '../typings/global'
import { UseQueryResult } from 'react-query'
import axios from 'axios';

const BaseUrl = process.env.VITE_APP_URL

export const getHome = async (): Promise<UseQueryResult> => {
  const response = await fetch(`${BaseUrl}/api/home/getHome`);
  if (!response.status) {
    const { message } = await response.json();
    throw new Error(message);
  }
  return response.json();
}

// cateId=${data.cateId}&pageCurr=${data.pageCurr}&pageSize=${data.pageSize}


export const getPostPage = async (data: PostSelect): Promise<UseQueryResult> => {
  // let postPageParams = {

  // }
  // const response = await fetch(`${BaseUrl}/api/home/getPostPage`, {
  //   method: 'get',
  //   postPageParams: {}
  // });
  // if (!response.status) {
  //   const { message } = await response.json();
  //   throw new Error(message);
  // }
  // return response.json();
  const result = await axios.request({ method: 'get', url: `${BaseUrl}/api/home/getPostPage`, params: data })
  return result.data
}

