import React from 'react'
import "../../content.css"
function BlogContent({ content }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }}
      className=' blogcontent mx-[30px] my-[40px] md:px-[20px] py-[20px] '
    ></div>
  )
}

export default BlogContent