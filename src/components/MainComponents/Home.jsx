import React from 'react'
import pic1 from "../images/whyimage/pic1.jpg"
import pic2 from "../images/whyimage/pic2.jpg"
import pic3 from "../images/whyimage/pic3.jpg"
import {HomeStart, HomeMid,Intro,Heading} from "../index"




function Home() {
  return(
    <div className='flex flex-col relative'>
    <Intro></Intro>
    <Heading text = "Why BLOGGER?"></Heading>
    <HomeStart></HomeStart>
    <Heading text = "Our community"></Heading>
    <HomeMid></HomeMid>
    </div>
    
  )
}

export default Home