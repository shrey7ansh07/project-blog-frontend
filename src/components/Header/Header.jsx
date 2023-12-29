import React from 'react'
import {Logo,Button,RoutingComp} from "../index"
import {logoutUser} from "../../services/authServices"
import {setunAuthenticated } from '../../store/authSlice.js'
import { unloadBlogs } from '../../store/blogSlice.js'
import { unloadBlogData } from '../../store/blogDataSlice'
import { unloadBlogRead } from '../../store/viewBlogSlice'
import { useDispatch, useSelector } from 'react-redux'
import LogOutBtn from '../partialcomponent/LogOutBtn'
import { useNavigate } from 'react-router-dom'
// import {persistor} from "../../store/store.js"
import Swal from "sweetalert2"
import "../../../node_modules/@sweetalert2/theme-dark/dark.css"



function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.authAnduser.isAuthenticated)
  async function LoggingOut()
  {

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
      if(result.isConfirmed)
      {
        try 
        {
          await logoutUser()
          //* reacher here implies successfull logout
          dispatch(setunAuthenticated())
          dispatch(unloadBlogs())
          dispatch(unloadBlogData())
          dispatch(unloadBlogRead())
          Swal.fire({
            title: "Logged Out",
            text: "Your have successfully logged out.",
            icon: "success"
          });
          navigate("/Login")
        }
        catch (error) 
        {
          throw error
        }
    }
  }
  return (
    <div className='z-[1000] text-white sticky top-0 w-[100%] bg-[#222f3e] md:px-7 md:py-6 px-3 py-[4px] flex justify-between'>
        <Logo></Logo>
        <RoutingComp/>
      <div className='flex md:gap-3 gap-1 items-center'>

       
           {isAuthenticated ?
            (<LogOutBtn checkingLogOut={LoggingOut} ></LogOutBtn>)
            :
            (<>
              <Button name = "Log In" reach="/Login"></Button>
              <Button name= "Sign In" reach = "/Signin"></Button>
            </>)}


        </div>

    </div>
  )
}

export default Header