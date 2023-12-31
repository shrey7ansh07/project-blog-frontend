import React from "react"
import { NavLink } from "react-router-dom"
import { useState } from "react"
export default function FormExtra(){
    const [isChecked,setIsChecked] = useState(false)
    const handleChange = (event) => {
        setIsChecked(event.target.checked)
    }
    return(
        <div className="flex items-center md:w-[500px] w-[300px] px-[5px]">
            <div className="flex items-center relative w-1/2 ">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className={`h-4 w-4 text-[#ffc900] rounded-lg ${isChecked?"bg-[#ffc900]":null} cursor-pointer`}
                    checked = {isChecked}
                    onChange={handleChange}
                />
                <label htmlFor="remember-me" className="ml-2 block md:text-[16px] text-[10px] text-gray-300">
                    Remember me
                </label>
            </div>

            <div className="md:text-[16px] text-[10px] flex justify-end w-1/2">
                <NavLink to = "#" className='hover:text-[#ffc900]'>Forgot your password ?</NavLink>
            </div>
      </div>

    )
}