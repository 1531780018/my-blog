import Navbar from './layout/header'
import "./styles/tailwind.css"
import GetRouterALL from './router/router';
import GetFooter from './layout/footer';
import { UserPanel, UserAbout, Previous, Statistics, Catalog, Search, Comments, LinkAge, CateTabs } from './layout/userPanel'
const App = () => {
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
          <CateTabs />
          {/* md:min-h-screen */}
          <div className='main-content  man-content-box '>
            <GetRouterALL />
          </div>
        </div>
        <div className='right-card w-60 flex-1'>
          <Catalog />
          <Search />
          <Comments />
          <LinkAge />
        </div>
      </div>
      <GetFooter />
    </div>)
}
export default App