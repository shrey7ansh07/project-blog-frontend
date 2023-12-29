import React, { useState } from 'react'
import like from "../images/like.png"

function BlogBtns() {
    const [liked,setLikes] = useState(false)
  return (
    <button className='flex items-center justify-center gap-[20px]'>
        Like 
        <span>
            <img src={like} 
            alt="like it " 
            className={`h-[25px] bg-[#222f3e]`}
            />
        </span>
    </button>
  )
}

export default BlogBtns