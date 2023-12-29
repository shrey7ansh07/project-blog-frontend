import React from 'react'

function AccountStats({heading,count = 0}) {
  return (
    <div className='text-gray-300 text-center md:px-[30px] 
    py-[10px] md:text-[19px] text-[15px] border-gray-500 border-2 md:w-[200px] w-[120px] rounded-lg 
    hover:border-gray-400 cursor-pointer focus:border-gray-400
    '>
        {heading} {count}
    </div>
  )
}

export default AccountStats