/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:49:36
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \My-blog\pages\views\home\index.tsx
 */
import "./index.css"
const userPic: string = "https://www.avatar.bio/avatar/1531780018@qq.com?bc=DAF1FF&tc=555555&t=AU&s=48"

let postList = [
  {
    cover: "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp",
    title: "测试文章",
    desc: "12313123",
    date: "2022-01-01",
    number: "888"
  }, {
    cover: "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp",
    title: "测试文章",
    desc: "12313123",
    date: "2022-01-01",
    number: "888"
  }, {
    cover: "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp",
    title: "测试文章",
    desc: "12313123",
    date: "2022-01-01",
    number: "888"
  }, {
    cover: "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp",
    title: "测试文章",
    desc: "12313123",
    date: "2022-01-01",
    number: "888"
  }, {
    cover: "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp",
    title: "测试文章",
    desc: "12313123",
    date: "2022-01-01",
    number: "888"
  },
]

// 文章列表
function index() {
  const post = postList.map(item => {
    return (
      <div className="post-list-item mb-3 rounded-lg shadow-lg bg-white p-4">
        <div className="post-item-user flex flex-row  items-center mb-2">
          <div className="pic">
            <img src={userPic} className="rounded-full border-2 border-white shadow-md w-50 h-50" />
          </div>
          <div className="info ml-4">
            <div className="user text-lg text-gray-500	"> 魔王 </div>
            <div className="user-date text-xs	text-gray-400	"> 3天前 </div>
          </div>
        </div>
        <div className="post-list-cover rounded-lg border-2 ">
          <div className="cover border-2 border-white shadow-md h-24 w-full bg-cover bg-center " style={{ backgroundImage: `url(${item.cover})` }}>
          </div>
          <div className="post-list-box pl-2">
            <div className="title  text-gray-500  text-lg leading-10	cursor-pointer	 hover:text-pink-300"> 「Node.js」import 引入 JSON 文件的问题 - rollup && eslint </div>
            <div className="desc flex ">
              <div className="tag  mb-2 cursor-pointer text-sm text-blue-300	hover:text-pink-300 mr-2 pl-2">#TAG</div>
              <div className="desc-content   mb-2 text-gray-400 text-sm">xzcasdqweqweqweasdaasdadsasdasdqweasdfasdfasd</div>
            </div>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    )
  })
  return (
    <div className="postList">
      {post}
    </div>
  )
}


export default index
