import React from 'react'
import { Logo, RoutingComp2, SocialMediaLinks } from "../index"
function Footer() {
  const datefunc = new Date()
  var year = datefunc.getFullYear()

  return (
    <div className='flex relative min-h-[200px] tablet:h-[300px] h-[20vh] w-full bg-[#222f3e] flex-col tablet:py-[60px] py-[35px] items-center tablet:gap-[20px] gap-[10px] tablet:mt-[100px] mt-[60px] justify-center'>
      <Logo />
      <div className='text-gray-400 tablet:text-base text-xs'>Copyright@ {year}</div>
      <RoutingComp2></RoutingComp2>
      <SocialMediaLinks></SocialMediaLinks>


    </div>
  )
}

export default Footer
