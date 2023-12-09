import React from 'react'
import {Logo,RoutingComp2,SocialMediaLinks} from "../index"
function Footer() {
    const datefunc = new Date()
    var year = datefunc.getFullYear()

  return (
    <div className='flex relative top-full w-full min-h-[200px] md:h-[300px] h-auto bg-zinc-700  flex-col md:py-[60px] py-[35px]
    items-center md:gap-[20px] gap-[10px] md:mt-[100px] mt-[50px]'>
        <Logo/>
        <div className='text-gray-400 md:text-base text-xs'>Copyright@ {year}</div>
        <RoutingComp2></RoutingComp2>
        <SocialMediaLinks></SocialMediaLinks>
        
        
    </div>
  )
}

export default Footer