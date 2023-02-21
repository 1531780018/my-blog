/*
 * @Author: Mowang
 * @Date: 2023-02-15 15:04:28
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \My-blog\pages\layout\header.tsx
 */
import type { Menu } from '../typings/global'
import "../common/global.scss"
const Navbar: React.FC = () => {
  return (<div className='header flex flex-row  items-center  bg-red-200 shadow-xl'>
    <Logo />
    <NavList />
  </div>)
}

const logoUrl: string = "https://www.wdssmq.com/zb_users/theme/acgMora/usr/logo.png"
const menu: Menu[] = [
  { icon: "", title: "首页", name: "home", href: "" },
  { icon: "", title: "留言本", name: "guestbook", href: "" },
  { icon: "", title: "管理", name: "cmd", href: "" },
  { icon: "", title: "关于我", name: "about", href: "" }
]

const NavList: React.FC = () => {
  const menuList = menu.map((item, index) => {
    return (
      <div className='transition duration-500 ease-in-out menu-item rounded-lg w-20 text-center transform hover:bg-red-300 hover:rounded-lg hover:h-6 hover:w-20' onClick={() => { menuItemClick(item.name) }} >
        {item.title}
      </div>
    )
  })
  return (
    <div className='menu flex flex-row'>
      {menuList}
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

const menuItemClick = (name: string) => {
  alert(name)
}
export default Navbar