import {Input,ErrorDisplay,FormAction,FormExtra} from '../index'
import { useState } from 'react';
import {useForm} from "react-hook-form"

const LoginFeilds = () => {
  const [error, seterror] = useState("")
  const {register, handleSubmit,formState:{errors}} = useForm()
  const login = async (data) => {
    
  }

  return(
    <form action="" onSubmit={handleSubmit(login)}>
      <Input 
      labelFor = "emailusername"
      labelText = "email or username"
      name = "emailusername"
      id = "emailusername"
      placeholder = "Email or Username"
      {...register("emailusername", {required: true})}/>

      <Input 
      labelFor = "password"
      autoComplete = {undefined}
      labelText = "Password"
      type = "password"
      name = "password"
      id = "password"
      placeholder = "Password"
      {...register("password", {required: true})}/>



      <FormExtra></FormExtra>

      <FormAction text="Login"></FormAction>

    </form>
  )
}

export default LoginFeilds



