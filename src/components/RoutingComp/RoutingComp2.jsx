import React from 'react'
import {RoutingElem2} from "../index"
function RoutingComp2() {
  return (
    <div>
        <nav className='flex md:gap-10 gap-5 items-center mx-5'>
            <RoutingElem2 name="Home" reach=""/>
            <RoutingElem2 name="About" reach = "/about"/>
            <RoutingElem2 name="Report" reach = "/report"/>
        </nav>
    </div>
  )
}

export default RoutingComp2