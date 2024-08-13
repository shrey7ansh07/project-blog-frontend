import React from 'react'
import { NavLink } from 'react-router-dom'
function Button(props) {
  return (
    <NavLink className='laptop:text-[13px] tablet:text-[12px] text-[10px] border-[1.5px] border-gray-400 px-2 py-[3px] tablet:rounded-lg rounded-md text-gray-100  gradient-install-hover active:scale-110 transition-all duration-500 ease-out laptop:py-[4px] w-[60px] laptop:w-[100px] tablet:w-[80px] text-center' to={props.reach}>
        {props.name}</NavLink>
    )
}
export default Button
