import React from 'react'

function CustomBtn({
  task,
  className = '',
  ...props}) {
  return (
<button className={`group relative md:min-w-fit w-[140px] flex justify-center py-1 px-4 border 
                border-transparent md:text-[17px] text-10px font-medium rounded-md text-black bg-gradient-to-r
                 from-yellow-300 to-orange-500 hover:bg-gradient-to-r hover:from-black 
                 hover:to-black hover:border-[2px] hover:border-[#ffc900] hover:text-[#ffc900] 
                 focus:outline-none active:scale-105 transition-all duration-400 ease-out md:mt-[40px] mt-[20px] ${className}`}  {...props}>{task}</button>
  )  
}

export default CustomBtn