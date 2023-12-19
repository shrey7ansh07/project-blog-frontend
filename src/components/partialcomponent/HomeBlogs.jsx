import React from 'react'

function HomeBlogs(
    {
        imageURL,
        authorName,
        Title,
    }
) {
  return (
    <div className = 'relative md:w-[250px] md:h-[350px] w-[150px] h-[220px] border-2 border-gray-400 hover:scale-110 transition-all duration-200 ease-out hover:md:border-4 hover:border-2 hover:border-gray-300 rounded-xl flex flex-col justify-center items-center'>
        <div className= {`flex md:gap-[20px] gap-[15px] flex-col justify-center items-center`}>
            <img src={imageURL} alt="" className='grayscale opacity-40 rounded-full md:w-[150px] aspect-square w-[100px] object-cover object-center
            border-2 border-gray-300 hover:md:border-4 hover:border-white hover:scale-110 transition-all duration-200 ease-out cursor-pointer'/>
            <h1 className='text-center md:text-[21px] text-[16px] text-gray-200 font-semibold gradient-install'>{authorName}</h1>
        </div>
        <div className='md:text-[23px] text-[20px] text-gray-400 hover:text-gray-300 cursor-pointer'>
            {Title} 
        </div>
    </div>
  )
}

export default HomeBlogs