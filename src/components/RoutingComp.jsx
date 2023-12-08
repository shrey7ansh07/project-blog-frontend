import React from 'react'
import { RoutingElem } from '../components/index';

function RoutingComp() {
  return (
    <nav className='flex md:gap-5 gap-3 items-center mx-5'>
        <RoutingElem name="Home" reach=""/>
        <RoutingElem name="About" reach = "/about"/>
        <RoutingElem name="Report" reach = "/report"/>
    </nav>
  )
}

export default RoutingComp