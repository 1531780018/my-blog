import { IPost, RespHome, ICate, IDict, userPanelCount, StatisCount } from '../typings/global'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
const userPanelBg: string = "https://www.wdssmq.com/zb_users/theme/acgMora/style/img/pic.webp"
const userPic: string = "https://www.avatar.bio/avatar/1531780018@qq.com?bc=DAF1FF&tc=555555&t=AU&s=48"

const statistics = [
  {
    name: "文章总数",
    num: 123
  }, {
    name: "页面总数",
    num: 123
  }, {
    name: "分类总数",
    num: 123
  }, {
    name: "标签总数",
    num: 123
  }, {
    name: "评论总数",
    num: 123
  }, {
    name: "浏览总数",
    num: 123
  },
]
const catelist = [
  {
    name: "测试分类11111",
    num: 123
  }, {
    name: "测试分类11111",
    num: 123
  }, {
    name: "测试分类11111",
    num: 123
  }, {
    name: "测试分类11111",
    num: 123
  }, {
    name: "测试分类11111",
    num: 123
  }, {
    name: "测试分类11111",
    num: 123
  },
]

// 用户展示
export const UserPanel: React.FC<userPanelCount<StatisCount>> = (props) => {
  return (
    <div className="rounded-lg shadow-lg h-40 mb-5 relative bg-white md:block">
      <div className="h-20 rounded-t-lg  p-4" style={{ backgroundImage: `url(${userPanelBg})` }}>
        <div className="userPic absolute top-12 ">
          <img src={userPic} className="rounded-full w-50 h-50 border-2 shadow-md border-white" />
        </div>
      </div>
      <div className="userInfo px-4 pt-6 flex justify-around">
        <div className="userbox">
          <div className="num text-pink-300	text-center	">{props?.Statis?.postCount ?? 0}</div>
          <div className="text text-gray-500 cursor-pointer	hover:text-pink-300">文章</div>
        </div>
        <div className="userbox">
          <div className="num text-pink-300 text-center	">{props?.Statis?.postCount ?? 0}</div>
          <div className="text text-gray-500 cursor-pointer	hover:text-pink-300">说说</div>
        </div>
        <div className="userbox">
          <div className="num text-pink-300 text-center	">{props?.Statis?.postCount ?? 0}</div>
          <div className="text text-gray-500 cursor-pointer	hover:text-pink-300">评论</div>
        </div>
      </div>
    </div>
  )
}
// 关于
export const UserAbout: React.FC<RespHome["contacts"]> = (props) => {
  const aboutItemList = props.Contacts.map((item: IDict, index: number) => {
    return (
      <div className="border-b-2 border-dashed py-2 text-gray-500 border-pink-300 cursor-pointer	hover:text-pink-300" key={index}>{`${item.key} : ${item.Value}`}</div>
    )
  })
  return (
    <div className="user-about p-4 rounded-lg shadow-lg  mb-5 bg-white">
      {aboutItemList}
    </div>
  )
}
// 最近文章
export const Previous: React.FC<RespHome["page"]> = (props) => {
  return (
    <div className="user-previous p-4 rounded-lg shadow-lg  mb-5 bg-white">
      <div>最近文章</div>
      <div>{
        props.NewPost.map((item: IPost, index: number) => {
          return (
            <div className="border-b-2 truncate border-dashed py-2 text-gray-500 border-pink-300 cursor-pointer hover:text-pink-300" key={index}>{`${item.title}`}</div>
          )
        })
      }
      </div>
    </div>
  )
}
// 统计
export const Statistics: React.FC = () => {
  const statusicsList = statistics.map((item, index) => {
    return (<div className="py-2 border-b-2 border-dashed border-pink-300 text-gray-500 " key={index}>{item.name} : {item.num}</div>)
  })
  return (
    <div className="user-statistics p-4 rounded-lg shadow-lg mb-5 bg-white">
      <div>站点信息</div>
      {statusicsList}
    </div>
  )
}
// 右侧
// 分类
export const Catalog: React.FC<RespHome['categorize']> = (props) => {
  const catelists = props.Cate.map((item: ICate, index: string) => {
    return (<div onClick={() => props.onClickCate(item.id)} className="py-2 border-b-2 border-dashed border-pink-300 text-gray-500  cursor-pointer hover:text-pink-300" key={index}>{item.name} </div>)
  })
  return (
    <div className="userCate p-4 rounded-lg shadow-lg mb-5 bg-white">
      <div>网站分类</div>
      {catelists}
    </div>
  )
}
// 搜索
export const Search: React.FC<{
  searchFun(arg0: string): any
}> = (props) => {
  const [searchVal, setSearhVal] = useState("")
  return (
    <div className="userSearch p-4 rounded-lg shadow-lg mb-5 bg-white">
      <div>搜索</div>
      <div className="search flex items-center">
        <div><input className="bg-white rounded border border-pink-300 p-1 focus:border validEmail?focus:border-pink-300:border-red-600 my-2 w-full"
          placeholder="搜索喜欢的内容吧" onChange={(e) => {
            setSearhVal(e.target.value)
          }} /></div>
        <div><button type="submit" className="bg-pink-300 text-white p-1 rounded ml-2 text-base w-full  hover:bg-pink-500" onClick={() => {
          props.searchFun(searchVal)
        }}>搜索</button> </div>
      </div>
    </div>
  )
}
// 友情链接
export const LinkAge: React.FC = () => {
  const catelists = catelist.map((item, index) => {
    return (<div className="py-2 border-b-2 border-dashed border-pink-300 text-gray-500  cursor-pointer hover:text-pink-300" key={index}> 友情链接12312123 </div>)
  })
  return (
    <div className="userLinkAge p-4 rounded-lg shadow-lg mb-5 bg-white">
      <div>友情链接</div>
      {catelists}
    </div>
  )
}
// 最新留言
export const Comments: React.FC = () => {
  const catelists = catelist.map((item, index) => {
    return (<div className="py-2 border-b-2 border-dashed border-pink-300 text-gray-500  cursor-pointer hover:text-pink-300" key={index}> 最新留言1123123123 </div>)
  })
  return (
    <div className="userComments p-4 rounded-lg shadow-lg mb-5 bg-white">
      <div>最新留言</div>
      {catelists}
    </div>
  )
}

//cateTabs
export const CateTabs: React.FC<RespHome['categorize']> = (props) => {
  const [searchParams] = useSearchParams();
  let Category = searchParams.get('Category')

  let list = props.Cate.map((item: ICate, index: number) => {
    return (<div onClick={() => props.onClickCate(item.id)} className={`cate-items w-16 text-center ${Category == item.id ? 'text-pink-300' : 'text-gray-500'} cursor-pointer hover:text-pink-300`} key={index} >
      {item.name}
    </div>)
  })
  return (
    <div className="userCate p-2 rounded-lg shadow-lg mb-5 bg-white h-10 flex flex-row  items-center">
      {list}
    </div>
  )
}

