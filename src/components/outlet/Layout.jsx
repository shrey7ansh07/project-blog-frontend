import React from 'react'
import { Header,Footer } from '../index'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='flex flex-col flex-1 min-h-full'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout