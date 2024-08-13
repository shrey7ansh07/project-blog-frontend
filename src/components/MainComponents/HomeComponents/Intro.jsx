import React from 'react'

function Intro() {
  return (
    <div className=' tablet:h-[600px] h-[300px] w-full homeImg flex tablet:items-start items-center justify-center tablet:mb-[100px] flex-col gap-[20px]'>
      <div className='text-gray-400 tablet:text-6xl text-[25px] w-fit h-auto max-h-[400px] relative tablet:px-[100px] px-[30px] leading-snug text-center tablet:text-left'>Write, Edit and Publish on BLOGEZZY  </div>
      <div className='text-gray-400 tablet:text-[35px] text-[20px] w-fit h-auto max-h-[150px] relative tablet:px-[100px] px-[50px] hidden tablet:flex'>Be the world wide </div>
      <div className='text-gray-400 tablet:text-[20px] text-[10px] w-fit max-w-[600px] h-auto max-h-[150px] relative tablet:px-[100px] px-[50px] tablet:text-left text-center'>Embark on a journey of words with us, where every blog post is a stepping stone towards knowledge, inspiration, and connection. Join our community</div>
    </div>
  )
}

export default Intro
