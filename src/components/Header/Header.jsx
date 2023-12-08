import React from 'react'
import {Logo,Button,RoutingComp} from "../index"

function Header() {
  return (
    <div className='z-[1000] text-white sticky top-0 w-[100%] bg-zinc-700 md:px-7 md:py-6 px-3 py-[4px] flex justify-between'>
        <Logo></Logo>
        <RoutingComp/>
        <div className='flex md:gap-3 gap-1 items-center'>
            <Button name = "Log In" reach="/Login"></Button>
            <Button name= "Sign In" reach = "/Signin"></Button>
        </div>

    </div>
  )
}

export default Header