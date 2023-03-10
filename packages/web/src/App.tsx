/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:14:28
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\App.tsx
 */
import Navbar from './layout/header'
import { HttpGetResp, RespHome, PageResult } from '../src/typings/global'
import "./styles/tailwind.css"
import "./common/global.scss"
import GetRouterALL from './router/router';
import GetFooter from './layout/footer';
import { UserPanel, UserAbout, Previous, Statistics, Catalog, Search, Comments, LinkAge, CateTabs } from './layout/userPanel'
import { getHome, getPostPage } from './BlogFetch/home'
import { useQuery, UseQueryResult } from "react-query"
import { Loading, Error } from './layout/comm'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useReducer } from "react"

const App = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams()
  const { data, isLoading, error }: UseQueryResult<HttpGetResp<RespHome>> = useQuery('home', () => { return getHome({}) })
  const hanlerClickCate = (id: number | string): void => {
    navigate(`/index?Category=${id}`)
    // setSearchParams({ "Category": id as string })
    // window.open(`/index?Category=${id}`, "_self") 
  }
  const hanlerSearch = (val: string): void => {
    navigate(`/index?Search=${val}`)
    // setSearchParams({ "Search": val })
    // window.open(`/index?Search=${val}`, "_self") 
  }
  return (<div>{
    isLoading ? <Loading /> : error ? <Error /> :
      <div className="md:container md:mx-auto bg-red-100">
        <Navbar />
        {/* 中心区域 */}
        <div className='main container mx-auto  my-8  flex  '>
          <div className='left-card w-60 flex-1'>
            <UserPanel Statis={data?.data?.statis} />
            <UserAbout Contacts={data?.data?.contacts} />
            <Previous NewPost={data?.data?.page} />
            <Statistics />
          </div>
          <div className='main-flex w-3/6 mx-5'>
            <CateTabs Cate={data?.data?.categorize} onClickCate={hanlerClickCate} />
            <div className='main-content  man-content-box'>
              <GetRouterALL />
            </div>
          </div>
          <div className='right-card w-60 flex-1'>
            <Catalog Cate={data?.data?.categorize} onClickCate={hanlerClickCate} />
            <Search searchFun={hanlerSearch} />
            <Comments />
            <LinkAge />
          </div>
        </div>
        <GetFooter />
      </div>
  }</div>)
}



export default App
