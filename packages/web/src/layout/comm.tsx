/*
 * @Author: Mowang
 * @Date: 2023-02-25 13:03:20
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\layout\comm.tsx
 */
import { pagerCount } from "../common/utils/utils"
export const Loading = () => {
  return (
    <div className="Loading flex w-full	h-full	bg-pink-300 absolute justify-center	items-center		">
      <div className="">
        <img src={`/images/loading.gif`} />
        <div className="text-white w-full text-center	text-4xl ml-12 mt-4"> Loading..... </div>
      </div>
    </div>
  )
}


export const Error = () => {
  return (
    <div className="Loading flex w-full	h-full	bg-pink-300 absolute justify-center	items-center		">
      <div className="">
        <img src={`/images/error.gif`} />
        <div className="text-white w-full text-center	text-4xl mt-4"> Error </div>
      </div>
    </div>
  )
}


export const Pagination: React.FC<{
  propsPageClick(arg0: number): any
  pageTatal: number,
  pageSize: number,
  pageCurr: number,
}> = (props) => {
  let list = new Array(parseInt(pagerCount(props.pageTatal, props.pageSize).toString())).fill(0).map((item: number, index: number) => {
    return <div className={` ${props.pageCurr == (index + 1) ? 'bg-pink-300 text-white' : 'bg-white'} 
    border-pink-300 shadow	 text-gray-500 rounded-md w-8 h-8 text-center	leading-8	mx-1 cursor-pointer 
    hover:text-white hover:bg-pink-300 active:shadow-inner`} key={index} onClick={() => props.propsPageClick(index + 1)}> {index + 1} </div>
  })
  return (
    <div className="Pagination flex items-center	justify-center	">
      <div className="border-pink-300 shadow	bg-white text-gray-500 rounded-md w-8 h-8 text-center	leading-8	mx-1 cursor-pointer hover:text-white hover:bg-pink-300 active:shadow-inner"> ‹‹ </div>
      {list}
      <div className="border-pink-300 shadow	bg-white text-gray-500 rounded-md w-8 h-8 text-center	leading-8	mx-1 cursor-pointer hover:text-white hover:bg-pink-300 active:shadow-inner"> › </div>
      <div className="border-pink-300 shadow	bg-white text-gray-500 rounded-md w-8 h-8 text-center	leading-8	mx-1 cursor-pointer hover:text-white hover:bg-pink-300 active:shadow-inner"> ›› </div>
    </div>
  )
}