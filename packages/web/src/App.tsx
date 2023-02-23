/*
 * @Author: Mowang
 * @Date: 2023-02-20 21:14:28
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\App.tsx
 */
import Navbar from './layout/header'
import { HttpGetResp, RespHome } from '../src/typings/global'
import "./styles/tailwind.css"
import GetRouterALL from './router/router';
import GetFooter from './layout/footer';
import { UserPanel, UserAbout, Previous, Statistics, Catalog, Search, Comments, LinkAge, CateTabs } from './layout/userPanel'
import { getHome } from './BlogFetch/home'
import { useQuery, UseQueryResult } from "react-query"

const App = () => {
  const { data, isLoading, error }: UseQueryResult<HttpGetResp<RespHome>> = useQuery('home', getHome)
  if (isLoading) return <div>{"Loading..."}</div>
  if (error) return <div>{"error"}</div>
  if (data?.code == 200) {
    return (
      <div className="none:container none:mx-auto bg-red-100">
        <Navbar />
        {/* 中心区域 */}
        <div className='main container mx-auto  my-8  flex  '>
          <div className='left-card w-60 flex-1'>
            <UserPanel />
            <UserAbout />
            <Previous />
            <Statistics />
          </div>
          <div className='w-3/6 mx-5'>
            <CateTabs Cate={data?.data?.categorize} />
            <div className='main-content  man-content-box '>
              <GetRouterALL />
            </div>
          </div>
          <div className='right-card w-60 flex-1'>
            <Catalog Cate={data?.data?.categorize} />
            <Search />
            <Comments />
            <LinkAge />
          </div>
        </div>
        <GetFooter />
      </div>)
  }

}
export default App