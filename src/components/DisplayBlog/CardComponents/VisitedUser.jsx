import React, { useEffect, useState } from 'react'
import Name from '../../Dashboard/ProfileComp/SubProfileComp/Name'
import UserImage from '../../Dashboard/ProfileComp/SubProfileComp/UserImage'
import UserName from '../../Dashboard/ProfileComp/SubProfileComp/UserName'
import AccountStats from '../../Dashboard/ProfileComp/SubProfileComp/AccountStats'
import { followaccount, checkfollowing } from '../../../services/authServices'
import defaultimage from "../../images/defaultpp.png"
import { CustomBtn } from "../../index"
import { Link } from 'react-router-dom'
import { set } from 'react-hook-form'

function VisitedUser({ user }) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [userFollower, setUserFollower] = useState(user?.followers)
  const [userFollowing, setUserFollowing] = useState(user?.following)

  useEffect(() => {
    const checkFollowStatus = async () => {
      try {
        const response = await checkfollowing(user._id)
        setIsFollowing(!response.value)
      } catch (error) {
        console.log(error);
      }
    };
    checkFollowStatus();
  }, [])

  const follow_unfollow = async () => {
    try {
      const response = await followaccount(user?._id)
      setIsFollowing(!response.value)
      const currentValue = !response.value ? userFollower - 1 : userFollower + 1
      setUserFollower(currentValue)

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex md:px-[250px] px-[150px] bg-[#242424] md:py-[100px] md:flex-row flex-col'>
      <div className='flex flex-col justify-start items-center 
        md:px-[40px] px-[20px] md:pt-[60px] pt-[30px] md:gap-[15px]
         gap-[10px]'>
        <UserImage imageUrl={user?.coverimage || defaultimage} />
        <Name name={user?.fullname} quote={user?.quote || ""} />
        <CustomBtn
          task={isFollowing ? "Follow" : "Unfollow"}
          onClick={follow_unfollow} />

      </div>
      <div className='flex-1 flex flex-col md:gap-[30px] gap-[15px] justify-start items-center'>
        <UserName Username={user?.username} />
        <div className='flex justify-center items-center md:gap-[20px] gap-[15px]'>
          <AccountStats heading="Followers" count={userFollower} />
          <AccountStats heading="Following" count={userFollowing} />
        </div>
        {user?.bio && (<div className='md:w-[800px] w-[400px] md:text-base text-sm md:text-start text-center'>
          {user?.bio}
        </div>)}
        <div className='flex md:flex-col md:justify-start md:w-[800px] md:gap-2 gap-[10px] flex-row flex-wrap justify-center '>
          <h1>Connect with me</h1>
          {Array.isArray(user?.links) && user?.links.map((link) => {
            return (<Link key={link} to={link} className='text-blue-500 font-semibold md:text-base text-sm hover:shadow-md'>@{link}</Link>)
          })
          }
        </div>


      </div>
    </div>
  )
}


export default VisitedUser