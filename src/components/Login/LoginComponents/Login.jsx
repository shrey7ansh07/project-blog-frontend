import React from 'react'
import { Heading, LoginFeilds, RoutingElem } from "../../index"



function Login() {
  return (
    <div className='flex flex-col items-center justify-center flex-1 min-h-[68vh]'>
      <Heading text="Login to you account"></Heading>
      <div className='md:text-base text-[10px]'>New to BLOGEZZY ?  <RoutingElem name="Sign In" reach="/Signin" /> </div>
      <LoginFeilds></LoginFeilds>

    </div>
  )
}

export default Login
