import React from 'react'
import { NavLink } from 'react-router-dom'
function Button(props) {
  return (
    <button className='md:text-xs text-[8px] border-[1.5px] border-gray-400 md:px-6 px-2 rounded-lg text-gray-100 md:h-[30px] h-auto
    gradient-install-hover active:scale-110 transition-all duration-500 ease-out sm:py-[4px]' > 
        <NavLink to={props.reach}>{props.name}</NavLink></button>
    )
}
export default Button