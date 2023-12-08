import React from 'react'
import {Link, NavLink} from "react-router-dom"

function RoutingElem2(props) {
  return (
    <NavLink to={props.reach} className={() => `text-gray-400 md:text-[12px] text-[10px] transition-all duration-500 ease-out font-semibold`}>{props.name}</NavLink>

  )
}

export default RoutingElem2