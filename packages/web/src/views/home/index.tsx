/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:49:36
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\views\home\index.tsx
 */
import { HttpGetResp, PageResult } from '../../../src/typings/global'
import { useQuery, UseQueryResult } from "react-query"
import { useNavigate } from 'react-router-dom'
import { getPostPage } from '../../BlogFetch/home'
const userPic: string = "https://www.avatar.bio/avatar/1531780018@qq.com?bc=DAF1FF&tc=555555&t=AU&s=48"
const cover: string = "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp"
import { IPost } from '../../typings/global'

// 文章列表
const Index = () => {
  const navigate = useNavigate()
  const { data, isLoading, error }: UseQueryResult<HttpGetResp<PageResult>> = useQuery('page', () => { return getPostPage({ pageSize: 10, pageCurr: 1 }) })
  console.log(data);

  return (
    <div className="postList">
      {data?.data?.result?.map((item: IPost, index: number) => {
        return (
          <div className="post-list-item mb-3 rounded-lg shadow-lg bg-white p-4 cursor-pointer hover:bg-pink-50" key={index} onClick={() => { navigate(`/post?id=${item.id}`) }}>
            <div className="post-item-user flex flex-row  items-center mb-2">
              <div className="pic">
                <img src={item.author.user_pic || userPic} className="rounded-full border-2 border-white shadow-md w-50 h-50" />
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
                  <div className="desc-content   mb-2 text-gray-400 text-sm truncate "> 123123123222222222222123123123222222222222123123123222222222222123123123222222222222123123123222222222222 </div>
                </div>
              </div>
            </div>
            <div className="">

            </div>
          </div>
        )
      })}
    </div>
  )
}


export default Index
