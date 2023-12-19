import React from 'react'
import { Header,Footer } from '../index'
import { Outlet } from 'react-router-dom'
function Layout() {
  console.log(import.meta.env.VITE_MONGODB_URL)
  return (
    <div className='flex flex-col flex-1'>
        <Header></Header>
        <Outlet ></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout