import React from 'react'
import { Heading, FormAction } from "../../index"
import { useForm } from "react-hook-form"
import { reportSubmit } from '../../../services/authServices'
import Swal from "sweetalert2"
import "../../../../node_modules/@sweetalert2/theme-dark/dark.css"

function Report() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const submitreport = async (data) => {
    try {
      const response = await reportSubmit(data)
      reset()
      Swal.fire({
        title: response,
        text: "We will reach to you asap.",
        icon: "success"
      });

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <Heading text="Report an issue" />
      <form action="" onSubmit={handleSubmit(submitreport)}>
        <textarea
          {...register("issue", { required: true })}
          name="issue"
          id="issue"
          cols="30"
          rows="10"
          className='md:w-[500px] w-[300px]  text-gray-300 
          md:p-[15px] p-[10px] border-2 border-gray-500 rounded-2xl 
          focus:outline-none focus:border-2 focus:border-gray-400 '>
        </textarea>
        <FormAction text="Submit"></FormAction>
      </form>
    </div >
  )
}

export default Report