import React from 'react'
import edit from "../images/edit.png"
function Logo(flag = false) {
  return (
    <div className= {`tablet:flex hidden items-center tablet:gap-2 gap-1`}>
      <img src={edit} alt="logo" className='tablet:w-10 w-4' />
      <div className='laptop:text-4xl tablet:text-3xl text-[1.5rem] font-semibold gradient-install'>BLOGEZZY</div>
    </div>
  )
}

export default Logo
