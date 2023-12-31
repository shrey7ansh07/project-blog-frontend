import React from 'react'
import BlogTitle from './BlogTitle'
import BlogContent from './BlogContent'
import BlogGenre from './BlogGenre'
import Admin from '../../Dashboard/ProfileComp/Admin'
import { useSelector } from 'react-redux'

function DisplayBlog({ disabled = false, todo = "" }) {
  const blog = useSelector(state => state.viewBlog.blogRead)
  return (
    <div className='flex flex-col'>
      <Admin disable={disabled} todo={todo} />
      <div className='bg-[#222f3e] md:mx-[100px] border-2 border-gray-500
        rounded-2xl mt-[50px]
    '>
        <BlogTitle title={blog?.blogtitle} />
        <BlogGenre genre={blog?.genre} />
        <BlogContent content={blog?.blogcontent} />

      </div>
    </div>
  )
}

export default DisplayBlog