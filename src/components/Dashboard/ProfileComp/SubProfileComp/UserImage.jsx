import React from 'react'

function UserImage({ imageUrl }) {
  return (
    <img src={imageUrl} alt="profile image"
      className='rounded-full md:w-[150px] aspect-square w-[100px] object-cover object-center
    border-2 border-gray-300 hover:md:border-4 hover:border-white hover:scale-110 transition-all 
    duration-200 ease-out cursor-pointer'
    />
  )
}

export default UserImage