import React from 'react'
import {Heading, LoginFeilds,RoutingElem, FormExtra,FormAction} from "../index"
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Heading text = "Login to you account"></Heading>
      <div className='md:text-base text-[10px]'>New to BLOGGER ?  <RoutingElem name = "Sign In" reach = "/Signin"/> </div>
      <LoginFeilds></LoginFeilds>
      <FormExtra></FormExtra>
      <FormAction text="Login"></FormAction>
      
      
    </div>
  )
}

export default Login

