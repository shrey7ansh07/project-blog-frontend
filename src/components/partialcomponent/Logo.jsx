import React from 'react'
import edit from "../images/edit.png"
function Logo() {
  return (
    <div className='flex items-center md:gap-2 gap-1'>
        <img src={edit} alt="" className='md:w-10 w-4' />
        <div className='md:text-3xl text-[1rem] font-semibold gradient-install'>BLOGGER</div>
    </div>
  )
}

export default Logo