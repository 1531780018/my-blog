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