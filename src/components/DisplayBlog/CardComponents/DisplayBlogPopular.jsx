import BlogContent from './BlogContent'
import BlogGenre from './BlogGenre'
import BlogTitle from './BlogTitle'
import VisitedUser from './VisitedUser'
import { useSelector } from 'react-redux'

function DisplayBlogPopular() {
  const blog = useSelector(state => state.viewBlog.blogRead)
  return (
    <div className='flex flex-col'>
      <VisitedUser user={blog?.user} />
      <div
        className='bg-[#222f3e] md:mx-[100px] border-2 border-gray-500
        rounded-2xl mt-[50px]'>
        <BlogTitle title={blog?.blogtitle} />
        <BlogGenre genre={blog?.genre} />
        <BlogContent content={blog?.blogcontent} />

      </div>
    </div>
  )
}

export default DisplayBlogPopular