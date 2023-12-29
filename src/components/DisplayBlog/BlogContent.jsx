import React from 'react'

function BlogContent({content}) {
  return (
    <div dangerouslySetInnerHTML={{__html:content}}
    className='mx-[30px] my-[40px] md:px-[20px] py-[20px]'
    ></div>
  )
}

export default BlogContent