import React from 'react'
import {
  HomeStart,
  HomeMid,
  Intro,
  Heading,
} from "../../index"

function Home() {
  return (
    <div className='flex flex-col relative'>
      <Intro></Intro>
      <Heading text="Why BLOGGER?"></Heading>
      <HomeStart></HomeStart>
      <Heading text="Our community"></Heading>
      <HomeMid></HomeMid>
      <Heading text="Most Popular"></Heading>




    </div>

  )
}

export default Home