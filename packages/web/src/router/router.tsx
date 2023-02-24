/*
 * @Author: Mowang
 * @Date: 2023-02-10 16:40:17
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\router\router.tsx
 */
import React, { lazy } from 'react'
import { RouteObject, useRoutes, } from "react-router-dom"
import { LazyLoad } from "../common/utils/utils"
import DocumentTitle from 'react-document-title'

import GuestBook from '../views/guestBook'
import Home from '../views/home'
import Post from "../views/post"

const HomeTitle = process.env.VITE_APP_TITLE

const routerList: RouteObject[] = [
  {
    path: '/',
    element: <DocumentTitle title={`${HomeTitle} - 首页`}><Home /></DocumentTitle>
  },
  {
    path: '/guestBook',
    element: <DocumentTitle title={`${HomeTitle} - 留言板`}><GuestBook /></DocumentTitle>
  },
  {
    path: '/post',
    element: <DocumentTitle title={`${HomeTitle} - 详情页`}><Post /></DocumentTitle>
  }
]


const GetRouterALL = () => {
  return (
    <div className='routerContent'>{useRoutes(routerList)}</div>
  )
}
export default GetRouterALL;
