import React from 'react'
import {Heading, LoginFeilds,RoutingElem, FormExtra,FormAction} from "../index"


function Login() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    authenticateUser();
}

//Handle Login API Integration here
const authenticateUser = () =>{

}
  return (
    <div className='flex flex-col items-center justify-center flex-1'>
      <Heading text = "Login to you account"></Heading>
      <div className='md:text-base text-[10px]'>New to BLOGGER ?  <RoutingElem name = "Sign In" reach = "/Signin"/> </div>
      <LoginFeilds></LoginFeilds>
      <FormExtra></FormExtra>
      <FormAction text="Login" handleSubmit={handleSubmit}></FormAction>
      
      
    </div>
  )
}

export default Login

