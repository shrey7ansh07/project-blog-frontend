import React from 'react'
import {
    UserImage,
    UserName,
} from "../../index"
import defaultpp from "../../images/defaultpp.png"
import { useSelector } from 'react-redux'

const className = 'flex flex-col md:gap-[10px] justify-center items-center md:px-[40px] px-[20px] ' 
function BlogCard() {
    // const userData = useSelector(state => state.authAnduser.userData)
    // console.log(userData);
  return (
    <div className='bg-[#222f3e] w-fit rounded-2xl border-gray-500 border-2 cursor-pointer 
    hover:scale-105 hover:border-gray-300 transition-all duration-200 ease-in-out shadow-[10px]'>
        <div className={`${className} md:py-[25px] py-[15px]`}>
            <UserImage imageUrl={defaultpp}/>
            <UserName Username="shreyansh gupta"/>
        </div>
        <div className={`${className} mb-[20px]`}>
            <h1 className='text-white font-semibold md:text-[18px] text-[14px]'>The title of the blog</h1>
            <h2 className='text-white font-normal'>Genre</h2>
        </div>
    </div>
  )
}

export default BlogCard