
import { getPost } from '../../BlogFetch/home';
import { HttpGetResp, PageResult } from '../../../src/typings/global'
import { UseQueryResult, useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
const Post = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const { data, isLoading, error, refetch }: UseQueryResult<HttpGetResp<{ title: string, updatedAt: string, content: string }>> = useQuery('page', () => {
    return getPost({
      id: searchParams.get('id') as string
    })
  })
  return (
    <div className="Post mb-3 rounded-lg shadow-lg p-4 break-all bg-white" >
      {
        isLoading ? (<div>Loading...</div>) : error ? <div>error</div> :
          (<div>
            <div className="Post-title mb-3 text-center text-3xl	text-gray-500	font-semibold	hover:underline ">{data?.data?.title}</div>
            <div className="Post-date mb-3 text-center text-xs	text-gray-500		hover:underline ">发布日期: {data?.data?.updatedAt} </div>
            <div className="Post-html" dangerouslySetInnerHTML={{ __html: data?.data?.content as string }}></div>
          </div>
          )
      }
    </div>
  )
}

export default Post