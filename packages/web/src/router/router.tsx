/*
 * @Author: Mowang
 * @Date: 2023-02-10 16:40:17
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \My-blog\pages\router\router.tsx
 */
import { lazy } from "react"
import { RouteObject, useRoutes } from "react-router-dom"
const LazyLoad = (to: string) => {
  const Comp = lazy(() => import(to))
  return (<Comp />)
}

const routerList: RouteObject[] = [
  {
    path: '/',
    element: LazyLoad('../views/home')
  }
]

const GetRouterALL = () => {
  return (<div>{useRoutes(routerList)}</div>)
}
export default GetRouterALL;




// const routerList: Routes[] = [
//   {
//     path: '/aaa',
//     component: LazyLoad('../views/home'),
//     meta: {
//       title: "首页"
//     }
//   }
// ]

