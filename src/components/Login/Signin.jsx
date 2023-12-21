import React from 'react'
import {SigninFeilds,Heading,RoutingElem } from "../index"

function Signin() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Heading text = "Create new account"></Heading>
      <div className='md:text-base text-[10px]'>Already have an account ?  <RoutingElem name = "Log In" reach = "/Login"/> </div>
      <SigninFeilds></SigninFeilds>
    </div>
  )
}

export default Signin