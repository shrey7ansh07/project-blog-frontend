import {Input,ErrorDisplay,FormAction,FormExtra} from '../index'
import { useState } from 'react';
import {useForm} from "react-hook-form"
import { login as loginUser,isEmail } from '../../services/authServices'; 
import { useNavigate } from 'react-router-dom';
import {setAuthenticated} from "../../store/authSlice.js"
import { loadBlogs } from '../../store/blogSlice.js';
import {useDispatch} from "react-redux"
import {getBlogs} from "../../services/blogServices.js"

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
      const response = await loginUser(userData)
      //* reached here implies successfull login
      // console.log(response.data);
      const user = {
        username : response.data.data.user.username,
        fullname : response.data.data.user.fullname,
        email: response.data.data.user.email,
        userId: response.data.data.user._id,
        coverimage: response.data.data.user.coverimage,
        bio : response.data.data.user.bio? response.data.data.user.bio : "",
        quote : response.data.data.user.quote? response.data.data.user.quote : "",
        links : response.data.data.user.links? response.data.data.user.links : [],
        followers: response.data.data.user.followers? response.data.data.user.followers: [],
        following: response.data.data.user.following? response.data.data.user.following: []
        //* here we have one

      }
      dispatch(setAuthenticated({user:user}))
      reset()
      navigate("/dashboard",{replace: true})
      const userBlogs = await getBlogs(user.userId)
      dispatch(loadBlogs({blogs:userBlogs}))


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
      labelText = "Email or Username"
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



