import {Input,ErrorDisplay,FormAction,FormExtra} from '../index'
import { useState } from 'react';
import {useForm} from "react-hook-form"
import { login as loginUser,isEmail } from '../../services/authServices'; 
import { useNavigate } from 'react-router-dom';
import {setAuthenticated} from "../../store/authSlice.js"
import {useDispatch} from "react-redux"

const LoginFeilds = () => {
  const dispatch = useDispatch()
  const [error, seterror] = useState("")
  const {register, handleSubmit,formState:{errors},reset} = useForm()
  const navigate = useNavigate()

  const login = async (data) => {
    const userData = 
    {
      password: data.password,
      email: isEmail(data.emailusername)? data.emailusername:undefined,
      username: !isEmail(data.emailusername)? data.emailusername:undefined

    }
    try {
      seterror("")
      console.log(userData);
      const response = await loginUser(userData)
      console.log(response)
      //* reached here implies successfull login
      const userInfo = response.data.data.user
      const user = {
        username : userInfo.username,
        fullname : userInfo.fullname,
        email: userInfo.email,
        userId: userInfo._id,
        coverimage: userInfo.coverimage
      }
      dispatch(setAuthenticated(user))
      reset()
      navigate("/")

    } catch (error) {
      reset()
      seterror(error.message||"login failed")
    }
  }

  return(

    <form action="" onSubmit={handleSubmit(login)}>
      {error!=="" && <ErrorDisplay message={error}></ErrorDisplay>}
      <Input 
      labelFor = "emailusername"
      labelText = "email or username"
      name = "emailusername"
      id = "emailusername"
      placeholder = "Email or Username"
      {...register("emailusername", {required: {value:true , message: "email or username is required"}})}
      />
      {errors.emailusername && <ErrorDisplay message={errors.emailusername.message}></ErrorDisplay>}

      <Input 
      labelFor = "password"
      autoComplete = {undefined}
      labelText = "Password"
      type = "password"
      name = "password"
      id = "password"
      placeholder = "Password"
      {...register("password", {required: {value:true , message: "password is required"}})}/>
      {errors.password && <ErrorDisplay message={errors.password.message}></ErrorDisplay>}




      <FormExtra></FormExtra>

      <FormAction text="Login"></FormAction>

    </form>
  )
}
  

export default LoginFeilds



