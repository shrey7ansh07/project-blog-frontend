import React from 'react'
import { RoutingElem } from '../index';
import { useSelector } from 'react-redux';

function RoutingComp() {
  const isAuthenticated = useSelector(state => state.authAnduser.isAuthenticated)
  if (!isAuthenticated) 
  {
    return(      
        <nav className='flex md:gap-7 gap-4 items-center justify-start md:mx-[80px] mx-[50px]  flex-1'>
            <RoutingElem name="Home" reach=""/>
            <RoutingElem name="About" reach = "/about"/>
            <RoutingElem name="Report" reach = "/report"/>
        </nav>
        )
  }
  else
  {
    return (
      <nav className='flex md:gap-7 gap-4 items-center justify-start md:mx-[80px] mx-[50px]  flex-1'>
            <RoutingElem name= "Dashboard" reach="/dashboard"/>
            <RoutingElem name= "Profile" reach= "/edit_profile"/>
            <RoutingElem name= "Add Blog" reach= "/writeBlog"/>
            
      </nav>
    )
  }

}

export default RoutingComp