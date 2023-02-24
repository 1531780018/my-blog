/*
 * @Author: Mowang
 * @Date: 2023-02-24 21:52:37
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\common\utils\utils.tsx
 */

import { lazy } from "react"
import DocumentTitle from 'react-document-title'

const HomeTitle = process.env.VITE_APP_TITLE

export const LazyLoad = (to: string, title: string) => {
  const Comp = lazy(async () => await import(`../../views/${to}`))
  return (<DocumentTitle title={`${HomeTitle} - ${title}`}><Comp /></DocumentTitle>)
}

export const GetDescContext = (context: string) => {

} 