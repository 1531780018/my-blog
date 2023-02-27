/*
 * @Author: Mowang
 * @Date: 2023-02-23 12:56:05
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\BlogFetch\home.tsx
 */
import { HttpGetResp, RespHome, PostSelect } from '../typings/global'
import { UseQueryResult, useQuery } from 'react-query'
import axios, { AxiosResponse } from 'axios';

const BaseUrl = process.env.VITE_APP_URL

export const getHome = async (data: any): Promise<UseQueryResult> => {
  const result = await axios.request({ method: 'post', url: `${BaseUrl}/api/home/getHome`, data })
  return result.data
}

export const getPostPage = async (data: PostSelect): Promise<UseQueryResult> => {
  const result = await axios.request({ method: 'post', url: `${BaseUrl}/api/home/getPostPage`, data })
  return result.data
}

