import React from 'react'
import Name from './SubProfileComp/Name'
import UserImage from './SubProfileComp/UserImage'
import defaultimage from "../../images/defaultpp.png"
import UserName from './SubProfileComp/UserName'
import AccountStats from './SubProfileComp/AccountStats'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Admin() {
  const user = useSelector(state => state.authAnduser.userData)
  if(!user) { return null}
  return (
    <div className='flex md:px-[250px] px-[150px] bg-[#242424] md:py-[100px] md:flex-row flex-col'>
        <div className='flex flex-col justify-start items-center 
        md:px-[40px] px-[20px] md:pt-[60px] pt-[30px] md:gap-[15px]
         gap-[10px]'>
            <UserImage imageUrl={user.coverimage||defaultimage}/>
            <Name name={user.fullname} quote="maxing out my limits" />
        </div>
        <div className='flex-1 flex flex-col md:gap-[30px] gap-[15px] justify-start items-center'>
            <UserName Username={user.username}/>
            <div className='flex justify-center items-center gap-[10px]'>
                <AccountStats heading="Blogs"/>
                <AccountStats heading="Followers" count={user.followers.length}/>
                <AccountStats heading="Following" count={user.following.length}/>
            </div>
            {user.bio && (<div className='md:w-[800px] w-[400px] md:text-base text-sm md:text-start text-center'>
                {user.bio}
            </div>)}
            <div className='flex md:flex-col md:justify-start md:w-[800px] md:gap-0 gap-[10px] flex-row flex-wrap justify-center '>
              <h1>Connect to me</h1>
              {Array.isArray(user.links) && user.links.map((link) => {
                  return (<Link key={link} to={link} className='gradient-install md:text-base text-sm'>@{link}</Link>)
                })
              }
            </div>


        </div>
    </div>
  )
}


export default Admin