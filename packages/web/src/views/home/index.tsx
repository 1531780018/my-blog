/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:49:36
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\views\home\index.tsx
 */
import { HttpGetResp, PageResult } from '../../../src/typings/global'
import { useQuery, UseQueryResult } from "react-query"
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { Pagination } from '../../layout/comm'
import { getPostPage } from '../../BlogFetch/home'
const userPic: string = "https://www.avatar.bio/avatar/1531780018@qq.com?bc=DAF1FF&tc=555555&t=AU&s=48"
const cover: string = "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp"
import { IPost } from '../../typings/global'
import { useEffect, useState } from 'react';

// 文章列表
const Index = () => {
  const [searchParams] = useSearchParams()
  const [pageCurr, setPageCurr] = useState(0) // 当前页数 1*10
  const [pageNumber, setPageNumber] = useState(10) // 每页显示多少条
  const [pageSize, setPageSize] = useState(pageNumber) // 每页显示多少条 curr * 10
  const [pageIndex, setPageIndex] = useState(1) // 当前下标
  const [cateId, setCateId] = useState("")
  const [search, setSearch] = useState("")
  const [pageData, setPageData] = useState({
    list: [],
    isLoading: false,
    error: false
  })

  const location = useLocation();
  useEffect(() => {
    refetch()
  }, [location])

  const { data, isFetching, error, refetch }: UseQueryResult<HttpGetResp<PageResult>> = useQuery('page', () => {
    return getPostPage({
      pageSize: pageSize,
      pageCurr: pageCurr,
      cateId: parseInt(searchParams.get('Category') as string),
      search: searchParams.get('Search') as string
    })
  })
  const pageHandelClick = (curr: number) => {
    setPageIndex(curr)
    setPageCurr((curr - 1) * pageNumber)
    setPageSize((curr - 1) + pageNumber)
    refetch()
  }
  const navigate = useNavigate()
  return (
    <div>
      {
        error ? (<div>{`error`}</div>) : isFetching ? <div>{`loading....`}</div> :
          <div className="postList">
            {data?.data?.result.map((item: IPost, index: number) => {
              return (
                <div className="post-list-item mb-3 rounded-lg shadow-lg bg-white p-4 cursor-pointer hover:bg-pink-50" key={index} onClick={() => { navigate(`/post?id=${item.id}`) }}>
                  <div className="post-item-user flex flex-row  items-center mb-2">
                    <div className="pic">
                      <img src={item.author.user_pic || userPic} className="rounded-full border-2 border-white shadow-md w-12 h-12" />
                    </div>
                    <div className="info ml-4">
                      <div className="user text-lg text-gray-500	"> {item.author.name} </div>
                      <div className="user-date text-xs	text-gray-400	"> 3天前 </div>
                    </div>
                  </div>
                  <div className="post-list-cover rounded-lg border-2 bg-white">
                    <div className="cover border-2 border-white shadow-md h-24 w-full bg-cover bg-center "
                      style={{ backgroundImage: `url(${item.cover || cover})` }}>
                    </div>
                    <div className="post-list-box pl-2">
                      <div className="title  text-gray-500  text-lg leading-10	cursor-pointer	 hover:text-pink-300">
                        {item.title} </div>
                      <div className="desc flex ">
                        <div className="tag  mb-2 cursor-pointer text-sm text-blue-300	hover:text-pink-300 mr-2 pl-2">#TAG</div>
                        <div className="desc-content mb-2 text-gray-400 text-sm truncate "> 123123123222222222222123123123222222222222123123123222222222222123123123222222222222123123123222222222222 </div>
                      </div>
                    </div>
                  </div>
                  <div className="">

                  </div>
                </div>
              )
            })}
            {<Pagination pageSize={pageNumber} pageCurr={pageIndex} pageTatal={data?.data?.pageCount as number} propsPageClick={pageHandelClick} />}
          </div>
      }
    </div>
  )
}


export default Index
