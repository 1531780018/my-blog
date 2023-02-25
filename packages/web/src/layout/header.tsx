/*
 * @Author: Mowang
 * @Date: 2023-02-15 15:04:28
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\layout\header.tsx
 */
import type { Menu } from '../typings/global'
import "../common/global.scss"
import { useNavigate } from 'react-router-dom'

const Navbar: React.FC = (props) => {
  return (<div className='header flex flex-row  items-center  bg-red-200 shadow-xl'>
    <Logo />
    <NavList />
  </div>)
}

const logoUrl: string = "https://www.wdssmq.com/zb_users/theme/acgMora/usr/logo.png"
const menu: Menu[] = [
  { icon: "", title: "首页", name: "home", href: "/" },
  { icon: "", title: "留言本", name: "guestbook", href: "/guestBook" },
  { icon: "", title: "管理", name: "cmd", href: "" },
  { icon: "", title: "关于我", name: "about", href: "" }
]

const NavList: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='menu flex flex-row'>
      {menu.map((item, index) => {
        return (
          <div className='transition duration-500 ease-in-out menu-item rounded-lg w-20 text-center transform hover:bg-red-300 hover:rounded-lg hover:h-6 hover:w-20' key={index} onClick={() => { navigate(item.href); }}  >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}

const Logo: React.FC = () => {
  return (
    <div className="rounded-full py-3 px-6 logo flex justify-center items-center">
      <img className='logoImg' src={logoUrl} />
    </div>
  )
}

export default Navbar