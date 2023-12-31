import React from 'react'

function DefaultMsg({ message }) {
  return (
    <div
      className='text-center md:text-[25px] text-[15px] font-semibold text-gray-300'
    >{message}</div>
  )
}

export default DefaultMsg