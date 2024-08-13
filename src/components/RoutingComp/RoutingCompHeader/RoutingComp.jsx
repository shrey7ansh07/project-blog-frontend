import React, { useState } from 'react'
import { RoutingElem } from '../../index';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";



function RoutingComp() {
  const isAuthenticated = useSelector(state => state.authAnduser.isAuthenticated)
  const [isHamburger,setIsHamburger] = useState(true);
  if (!isAuthenticated) {

    return (
        <>
        <div
            className='tablet:hidden cursor-pointer hover:font-bold'
            onClick={() => setIsHamburger(!isHamburger)}>
            {isHamburger?<GiHamburgerMenu className='text-[20px]'/>:<RxCross1 className='text-[20px]'/>}
        </div>
        {!isHamburger ? (
            <nav className='flex flex-col md:gap-7 gap-4 items-center justify-center md:mx-[80px] mx-[50px] tablet:hidden absolute top-[80px] left-[-10px] border-gray-400 border-2 px-[40px] py-[30px] rounded-lg backdrop-blur '>
                <RoutingElem name="Home" reach="" />
                <RoutingElem name="About" reach="/about" />
                <RoutingElem name="Privacy" reach="/privacy" />
              </nav>):null
        }
        <nav className='tablet:flex md:gap-7 gap-4 items-center justify-start md:mx-[80px] mx-[50px] hidden flex-1'>
            <RoutingElem name="Home" reach="" />
            <RoutingElem name="About" reach="/about" />
            <RoutingElem name="Privacy" reach="/privacy" />
        </nav>
    </>
    )
  }
  else {
    return (
      <nav className='tablet:flex md:gap-7 gap-4 items-center justify-start md:mx-[80px] mx-[50px] hidden flex-1'>
        <RoutingElem name="Dashboard" reach="/dashboard" />
        <RoutingElem name="Profile" reach="/edit_profile" />
        <RoutingElem name="Add Blog" reach="/writeBlog" />
        <RoutingElem name="Report" reach="/report" />

      </nav>
    )
  }

}

export default RoutingComp
