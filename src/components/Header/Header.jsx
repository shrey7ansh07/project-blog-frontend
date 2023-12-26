import React from 'react'
import {Logo,Button,RoutingComp} from "../index"
import {logoutUser} from "../../services/authServices"
import {setunAuthenticated } from '../../store/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import LogOutBtn from '../partialcomponent/LogOutBtn'
import { useNavigate } from 'react-router-dom'
// import {persistor} from "../../store/store.js"



function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector(state => state.authAnduser.isAuthenticated)
  async function LoggingOut()
  {
    try {
      const response = await logoutUser()
      //* reacher here implies successfull logout
      dispatch(setunAuthenticated())
      // window.localStorage.clear()
      navigate("/Login")
    
    } catch (error) {
      throw error
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