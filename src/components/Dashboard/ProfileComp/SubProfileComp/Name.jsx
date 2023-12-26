import React from 'react'

function Name({name , quote}) {
  return (
    <div className='flex flex-col justify-center items-center gap-[5px] py-[20px]'>
        <h1 className='text-center md:text-[24px] text-[18px] gradient-install'>{name}</h1>
        <h1 className='text-center md:text-[19px] text-[15px] text-gray-300'>{quote}</h1>
    </div>
  )
}

export default Name