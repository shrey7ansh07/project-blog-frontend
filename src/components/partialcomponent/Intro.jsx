import React from 'react'

function Intro() {
  return (
    <div className=' md:h-[600px] h-[300px] w-full md:top-[5rem] top-[2rem] homeImg flex items-start justify-center md:mb-[100px] mt-[40px] flex-col gap-[20px]'>
        <div className='text-gray-400 md:text-[60px] text-[35px] md:w-[900px] w-[500px] h-auto max-h-[300px] relative md:px-[100px] px-[50px] leading-snug '>Write, Edit and Publish on BLOGGER  </div>
        <div className='text-gray-400 md:text-[35px] text-[20px] md:w-[800px] w-[300px] h-auto max-h-[150px] relative md:px-[100px] px-[50px] '>Be the world wide </div>
        <div className='text-gray-400 md:text-[20px] text-[10px] md:w-[800px] w-[300px] h-auto max-h-[150px] relative md:px-[100px] px-[50px] '>Embark on a journey of words with us, where every blog post is a stepping stone towards knowledge, inspiration, and connection. Join our community..</div>
    </div>
 )
}

export default Intro