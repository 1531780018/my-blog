/*
 * @Author: Mowang
 * @Date: 2023-02-25 13:03:20
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\layout\comm.tsx
 */
export const Loading = () => {
  return (
    <div className="Loading flex w-full	h-full	bg-pink-300 absolute justify-center	items-center		">
      <div className="">
        <img src={`../../static/loading.gif`} />
        <div className="text-white w-full text-center	text-4xl ml-12 mt-4"> Loading..... </div>
      </div>
    </div>
  )
}


export const Error = () => {
  return (
    <div className="Loading flex w-full	h-full	bg-pink-300 absolute justify-center	items-center		">
      <div className="">
        <img src={`../../static/error.gif`} />
        <div className="text-white w-full text-center	text-4xl mt-4"> Error </div>
      </div>
    </div>
  )
}

export const Pagination = () => {
  let list = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
    return <div className="border-pink-300 shadow	bg-white text-gray-500 rounded-md w-8 h-8 text-center	leading-8	mx-1 cursor-pointer hover:text-white hover:bg-pink-300 active:shadow-inner"> {item} </div>
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