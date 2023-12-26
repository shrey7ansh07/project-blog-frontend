import React from "react"
const Input = React.forwardRef(function Input({
  labelText,
  labelFor,
  className= "",
  type = "text", ...props},ref){
  return(
      <div className="md:my-8 my-4 flex flex-col gap-[10px]">
          <label htmlFor={labelFor} className="text-gray-300 text-center md:w-[500px] md:text-base text-[12px] ">
            {labelText}
          </label>
          <input
            ref={ref}
            type={type}
            {...props}
            className= {`rounded-lg bg-[#222f3e] block md:w-[500px] w-[300px] px-3 md:py-4 py-2 border border-gray-300 placeholder-gray-400 focus:text-[#ffc900] focus:outline-none focus:ring-[#ffc900] focus:border-[#ffc900] focus:z-10 md:text-[16px] text-[10px] active:scale-105 transition-all duration-300 ease-out text-gray-300 ${className}`}
          />
      </div>
  )
})
export default Input