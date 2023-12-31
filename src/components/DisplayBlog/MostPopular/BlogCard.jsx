import React from 'react'
import {
    UserImage,
    UserName,
} from "../../index"
import defaultpp from "../../images/defaultpp.png"
import { useDispatch } from 'react-redux'
import { loadBlogRead } from '../../../store/viewBlogSlice'
import { useNavigate } from 'react-router-dom'


const className = 'flex flex-col md:gap-[10px] justify-center items-center md:px-[40px] px-[20px] '
function BlogCard({ blog }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = blog.authorInfo[0]
    const viewBlog = () => {
        const data = {
            blogtitle: blog.blogtitle,
            genre: blog.genre,
            blogcontent: blog.blogcontent,
            user: user

        }
        dispatch(loadBlogRead({ blog: data }))
        navigate("/blog")
    }
    return (
        <div
            onClick={viewBlog}
            className='bg-[#222f3e] w-[600px] rounded-2xl border-gray-500 border-2 cursor-pointer 
    hover:border-2 hover:scale-105 hover:border-gray-300 transition-all duration-200 ease-in-out shadow-[10px]'>
            <div className={`${className} md:py-[25px] py-[20px] flex flex-col justify-center `}>
                <UserImage imageUrl={user.coverimage || defaultpp} />
                <UserName Username={user.fullname} />
            </div>
            <div className={`${className} mb-[20px] h-[90px] flex flex-col justify-center`}>
                <h1 className='text-white font-semibold md:text-[18px] text-[14px] text-center w-[200px]'>{blog.blogtitle}</h1>
                <h2 className='text-white font-normal'>{blog.genre}</h2>
            </div>
        </div>
    )
}

export default BlogCard