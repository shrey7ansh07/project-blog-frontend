import React from 'react'

function BlogTitle({ title }) {
  return (
    <div className='text-center md:text-[60px] text-[30px] 
    text-gray-300 md:py-[30px] py-[20px] md:px-[50px] px-[30px]
    font-bold gradient-install border-[5px] border-[#242530]
    mx-[50px] mt-[20px] rounded-lg'>{title}</div>
  )
}

export default BlogTitle