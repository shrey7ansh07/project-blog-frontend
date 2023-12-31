import React from 'react'
import Admin from './ProfileComp/Admin'
import {
  Heading,
  BlogContainer,
  DefaultMsg,
  BlogContainerPopular} from "../index"
import { useSelector } from 'react-redux'
function Dashboard() {
  const user = useSelector(state => state.authAnduser.userData)
  const blogs = useSelector(state=> state.myblogs.defaultBlogsUser)
  const popularblogs = useSelector(state => state.mostPopular.popularblogs)

  return (
    <div>
        <Admin/>
        <Heading text = "Most Popular"/>
        {
          popularblogs?.length>0
          &&
          <BlogContainerPopular blogsAnduser={popularblogs}/>
          
        }
        <Heading text = "My Blogs"/>

        {blogs?.length > 0
        ? 
        <BlogContainer 
        blogs={blogs}
        userimage={user?.coverimage}
        username={user?.fullname}
        />
        :
        <DefaultMsg message="Looks like you havn't written anything"/>
      }
        

    </div>
  )
}

export default Dashboard