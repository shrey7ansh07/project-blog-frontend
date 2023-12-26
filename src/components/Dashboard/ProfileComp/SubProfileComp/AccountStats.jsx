import React from 'react'

function AccountStats({heading,count = 0}) {
  return (
    <div className='text-gray-300 text-center md:px-[30px] 
    py-[10px] md:text-[19px] text-[15px]'>
        {heading} {count}
    </div>
  )
}

export default AccountStats