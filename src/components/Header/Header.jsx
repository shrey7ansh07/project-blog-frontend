import React, { useState } from 'react'
import { Logo, Button, RoutingComp } from "../index"
import { logoutUser } from "../../services/authServices"
import { setunAuthenticated } from '../../store/authSlice.js'
import { unloadBlogs } from '../../store/blogSlice.js'
import { unloadBlogData } from '../../store/blogDataSlice'
import { unloadBlogRead } from '../../store/viewBlogSlice'
import { unloadPopularBlogs } from '../../store/mostPopularSlice'
import { useDispatch, useSelector } from 'react-redux'
import LogOutBtn from '../partialcomponent/LogOutBtn'
import { useNavigate } from 'react-router-dom'
// import {persistor} from "../../store/store.js"
import Swal from "sweetalert2"
import "../../../node_modules/@sweetalert2/theme-dark/dark.css"
import LoadingComp from '../partialcomponent/LoadingComp'



function Header() {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.authAnduser.isAuthenticated)
  async function LoggingOut() {

    const result = await Swal.fire({
      title: "Logout from your account?",
      text: "Save all the changes before logging out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ffc900",
      cancelButtonColor: "#222f3e",
      confirmButtonText: "Logout",
      confirmButtonAriaLabel: "yellow"
    })
    if (result.isConfirmed) {
      setIsLoading(true)
      try {
        await logoutUser()
        //* reacher here implies successfull logout
        dispatch(setunAuthenticated())
        dispatch(unloadBlogs())
        dispatch(unloadBlogData())
        dispatch(unloadBlogRead())
        dispatch(unloadPopularBlogs())
        setIsLoading(false)
        Swal.fire({
          title: "Logged Out",
          text: "Your have successfully logged out.",
          icon: "success"
        });
        navigate("/Login")
      }
      catch (error) {
        setIsLoading(false)
        throw error
      }
    }
  }
  if (isLoading) {
    return <LoadingComp text="Logging out ...." />
  }
  return (
    <div className='z-[1000] sticky top-0 bg-[#222f3e] h-[12vh] w-full text-whitelaptop:px-[10rem] tablet:px-[4rem] px-[2.5rem] flex items-center'>
      <Logo></Logo>
      <RoutingComp />
      <div className='flex md:gap-3 gap-1 items-center'>


        {isAuthenticated ?
          (<LogOutBtn checkingLogOut={LoggingOut} ></LogOutBtn>)
          :
          (<>
            <Button name="Log In" reach="/Login"></Button>
            <Button name="Sign In" reach="/Signin"></Button>
          </>)}


      </div>

    </div>
  )
}

export default Header
