import React from 'react'
import { Heading, AboutMid } from "../../index"
function About() {
  return (
    <div className='flex flex-col relative min-h-[68vh]'>
      <div className='flex flex-col justify-center items-center'>
        <Heading text="About us" />
        <div className='md:w-[500px] w-[300px] md:text-[40px] text-[25px] max-h-[250px] text-center text-gray-300'>
          We belive in Writer's comfort and Reader's experience</div>
      </div>
      <Heading text="Meet the team"></Heading>
      <AboutMid></AboutMid>

    </div>
  )
}

export default About
