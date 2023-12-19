import React from 'react'

function ErrorDisplay({message}) {
  return (
    <div className='sticky top-0 px-[10px] py-[5px] text-[18px] text-center rounded-sm text-red-500 mt-[10px]'>{message}</div>
  )
}

export default ErrorDisplay