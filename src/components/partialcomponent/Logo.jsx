import React from 'react'
import edit from "../images/edit.png"
function Logo() {
  return (
    <div className='flex items-center md:gap-2 gap-1'>
      <img src={edit} alt="logo" className='md:w-10 w-4' />
      <div className='laptop:text-3xl tablet:text-2xl text-[1rem] font-semibold gradient-install'>BLOGEZZY</div>
    </div>
  )
}

export default Logo
