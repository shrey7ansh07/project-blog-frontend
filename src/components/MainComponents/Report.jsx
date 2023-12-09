import React from 'react'
import {Heading,FormAction} from "../index"
function Report() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Heading text = "Report an issue"/>
        <form action="">
          <textarea name="issue" id="" cols="30" rows="10" className='md:w-[500px] w-[300px]  text-gray-300 md:p-[15px] p-[10px] border-2
           border-gray-500 rounded-2xl 
          focus:outline-none focus:border-2 focus:border-gray-400 '></textarea>
        </form>
        <FormAction text = "Submit"></FormAction>
        
        
    </div>
  )
}

export default Report