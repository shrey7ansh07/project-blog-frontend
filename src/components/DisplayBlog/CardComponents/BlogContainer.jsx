import React, { useRef } from 'react'
import {BlogCardUser} from "../../index"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function BlogContainer({
    blogs,
    userimage,
    username,
})
 {
    const elementRef = useRef(null)
    const slideLeft = (element) => {
        element.scrollLeft-=500
    }
    const slideRight = (element) => {
        element.scrollLeft+=500
    }

  return (

    <div className='relative'>
        {Array.isArray(blogs) && (blogs.length > 4) &&(    
        <>    
        <FaArrowLeft 
        onClick={() => slideLeft(elementRef.current)}
        className='w-[50px] h-auto p-2 z-10 cursor-pointer
        hidden md:block absolute mt-[240px] left-6'/>
        <FaArrowRight 
        onClick={() => slideRight(elementRef.current)}
        className='w-[50px] h-auto p-2 z-10 cursor-pointer
        hidden md:block absolute right-6 mt-[240px] '/>
        </>)
 }

        <div 
        ref={elementRef}
        className='flex md:gap-[100px] gap-[50px] 
        overflow-x-auto no-scrollbar md:px-[120px] px-[50px] scroll-smooth py-[50px]'>
        {
            blogs.map((blog) => (
                <BlogCardUser
                key={blog.blogtitle}
                blogtitle={blog.blogtitle}
                blogcontent={blog.blogcontent}
                blogId={blog._id}
                username={username}
                genre={blog.genre}
                userimage={userimage}
                />
            ))
        }
        </div>
    </div>
  )
}

export default BlogContainer