import React from 'react'

function LoadingComp({ text = "Loading...." }) {
    return (
        <div className='absolute z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-[#242424]'>
            <div className='text-white md:text-[50px] text-[20px]' >{text}</div>
        </div>

    )
}

export default LoadingComp