import {Input, signupFields,FormAction,ErrorDisplay} from '../index'
import { useState } from 'react';
import {useForm} from "react-hook-form"

function SigninFeilds() {
  const {register, handleSubmit,watch, formState: {errors}} = useForm()
  const password = watch("password")
  const [error, seterror] = useState("")
  const signin = async (data) => {
    console.log(data)
  }
    return(
    <form action="" onSubmit={handleSubmit(signin)}>
    
      {/* {(Object.keys(errors).length > 0 && seterror(errors.Object.keys(errors)[0].message)&& <ErrorDisplay message = {error}></ErrorDisplay>)||seterror("")} */}
      <Input 
      labelFor = "fullname"
      labelText = "Fullname"
      name = "fullname"
      id = "fullname"
      placeholder = "Fullname"
      autoComplete = {undefined}
      {...register("fullname", {required: {value:true,message:"fullname is required"}})}/>
      {errors.fullname && <ErrorDisplay message={errors.fullname.message}></ErrorDisplay>}

      <Input 
      labelFor = "username"
      labelText = "Username"
      name = "username"
      id = "username"
      placeholder = "Username"
      autoComplete = {undefined}
      {...register("username", {
        required: {value:true,message:"username is required"},
        minLength: {value: 6, message: "Username must be at least 6 characters long"}

        })}/>

      {errors.username && <ErrorDisplay message = {errors.username.message}></ErrorDisplay>}


      <Input 
      labelFor = "email"
      labelText = "Email"
      name = "email"
      id = "email"
      placeholder = "Email"
      autoComplete = {undefined}
      {...register("email", {
        required: {value:true, message:"email is required"},
        validate: {
          matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
          "Email address must be a valid address",
      }}
      )}/>
      {errors.email && <ErrorDisplay message={errors.email.message}></ErrorDisplay>}



      <Input 
      labelFor = "password"
      labelText = "password"
      name = "password"
      id = "password"
      type = "password"
      placeholder = "Password"
      autoComplete = {undefined}
      {...register("password", {
        required: {value: true, message: "Password is required"},
        minLength: {value: 8, message: "Password must be at least 8 characters long"}
      })}
      />
      {errors.password && <ErrorDisplay message={errors.password.message}></ErrorDisplay>}
      
      <Input 
      labelFor = "confirmpassword"
      labelText = "confirm-password"
      name = "confirmpassword"
      id = "confirmpassword"
      type = "password"
      placeholder = "Confirm Password"
      autoComplete = {undefined}
      {...register("confirmpassword", {
        required: {value: true, message: "Confirm password is required"},
        validate: value => value === password || "The passwords do not match",
      })}
    />
    {errors.confirmpassword && <ErrorDisplay message={errors.confirmpassword.message}></ErrorDisplay>}



      <FormAction text="Sign In"></FormAction>
      </form>
  )
}
export default SigninFeilds