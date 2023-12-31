import React from 'react'
import {NavLink} from "react-router-dom"

function RoutingElem(props) {
  return (
    <NavLink to={props.reach} className={({isActive}) => `${!isActive? 
      "text-gray-100":"gradient-install border-b-[1px] border-orange-400 outline-offset-4"} md:text-[14px] text-[10px] transition-all duration-500 ease-out font-semibold hover:text-[#ffc900]`}>{props.name}</NavLink>

  )
}

export default RoutingElem