import React from 'react'
import pic1 from "../images/whyimage/pic1.jpg"
import pic2 from "../images/whyimage/pic2.jpg"
import pic3 from "../images/whyimage/pic3.jpg"

function HomeStart() {
const imageList = 
[
  {
    id: 1,
    imageURL : pic1,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum soluta laudantium consequuntur dignissimos dolorem fugit obcaecati commodi repellat recusandae."
  },
  {
    id: 2,
    imageURL : pic2,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium laudantium odio deleniti, enim tempore. Inventore fugit laborum maxime quaerat."
  },
  {
    id: 3,
    imageURL : pic3,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero cum ipsa recusandae voluptates iure corporis repellat, esse nihil mollitia?"
  }

]
    return (
        <div className=' md:mb-[80px] mb-[30px] relative flex flex-wrap justify-center items-center md:gap-[50px] gap-[30px] mt-[50px]'>
              {imageList.map( (item,index) => {
                  return <div 
                  className='relative md:w-[300px] md:h-[400px] w-[150px] h-[220px] hover:scale-110 transition-all duration-200 ease-out hover:md:border-4 hover:border-2 border-gray-300 rounded-xl' key={index}>
                  <img src={item.imageURL} alt="" className='grayscale  z-0 opacity-30 w-full h-full'/>
                  <div className='absolute top-0 z-[1] w-full h-full opacity-0 hover:opacity-80 px-[10px] py-[30%] md:text-[18px] text-[10px] text-center'>{item.content}</div>
                        </div> })}
        </div> 
 )}
 export default HomeStart