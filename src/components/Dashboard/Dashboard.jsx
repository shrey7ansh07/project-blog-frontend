import React from 'react'
import Admin from './ProfileComp/Admin'
import {Heading,BlogContainer} from "../index"
import { useSelector } from 'react-redux'
function Dashboard() {
  const user = useSelector(state => state.authAnduser.userData)
  const blogs = useSelector(state=> state.myblogs.defaultBlogsUser)

  return (
    <div>
        <Admin/>
        <Heading text = "My Blogs"/>
        <BlogContainer 
        blogs={blogs}
        userimage={user?.coverimage}
        username={user?.fullname}
        />
        <Heading text = "Continue Reading"/>
        

    </div>
  )
}

export default Dashboard