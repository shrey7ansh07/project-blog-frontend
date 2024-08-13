import React from 'react'
import edit from "../images/edit.png"
function Logo() {
  return (
    <div className='tablet:flex items-center md:gap-2 gap-1 hidden'>
      <img src={edit} alt="logo" className='md:w-10 w-4' />
      <div className='laptop:text-3xl tablet:text-2xl text-[1.5rem] font-semibold gradient-install'>BLOGEZZY</div>
    </div>
  )
}

export default Logo
