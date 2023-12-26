import React from 'react'

function ErrorDisplay({message, className = 'text-red-500'}) {
  return (
    <div className={`sticky top-0 px-[10px] py-[5px] text-[18px] text-center rounded-sm mt-[10px] ${className}`}>{message}</div>
  )
}

export default ErrorDisplay