/*
 * @Author: Mowang
 * @Date: 2023-02-10 16:40:17
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\router\router.tsx
 */
import { lazy } from "react"
import { RouteObject, useRoutes, useLocation } from "react-router-dom"

import DocumentTitle from 'react-document-title'

const LazyLoad = (to: string, title: string) => {
  const Comp = lazy(async () => await import(to))
  return (<DocumentTitle title={`My - ${title}`}><Comp /></DocumentTitle>)
}

const routerList: RouteObject[] = [
  {
    path: '/',
    element: LazyLoad('../views/home', "首页")
  },
  {
    path: '/aaa',
    element: LazyLoad('../views/home', "一号分类")
  }
]





const GetRouterALL = () => {

  return (
    <div>{useRoutes(routerList)}</div>
  )
}
export default GetRouterALL;
