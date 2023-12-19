import React from "react"
import {useId} from "react"
const Input = React.forwardRef(function Input({
  labelText,
  labelFor,
  type = "text", ...props},ref){
  return(
      <div className="my-8">
          <label htmlFor={labelFor} className="sr-only">
            {labelText}
          </label>
          <input
            ref={ref}
            type={type}
            {...props}
            className= "rounded-lg relative block md:w-[500px] w-[300px] px-3 md:py-4 py-2 border border-gray-300 placeholder-gray-400 focus:text-[#ffc900] focus:outline-none focus:ring-[#ffc900] focus:border-[#ffc900] focus:z-10 md:text-[16px] text-[10px] active:scale-105 transition-all duration-300 ease-out text-gray-300"
          />
      </div>
  )
})
export default Input