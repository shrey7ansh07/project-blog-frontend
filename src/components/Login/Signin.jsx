import React from 'react'
import {SigninFeilds,FormAction,Heading,RoutingElem } from "../index"

function Signin() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{

  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <Heading text = "Create new account"></Heading>
      <div className='md:text-base text-[10px]'>Already have an account ?  <RoutingElem name = "Log In" reach = "/Login"/> </div>
      <SigninFeilds></SigninFeilds>
      <FormAction text="Sign In" handleSubmit={handleSubmit}></FormAction>
      
      
    </div>
  )
}

export default Signin