export default function FormAction({
    handleSubmit,
    type='Button',
    text
}){
    return(
            <button
                type = "submit"
                className="group relative md:w-[500px] w-[300px] flex justify-center py-2 px-4 border 
                border-transparent md:text-[20px] text-15px font-medium rounded-md text-black bg-gradient-to-r
                 from-yellow-300 to-orange-500 hover:bg-gradient-to-r hover:from-black 
                 hover:to-black hover:border-[2px] hover:border-[#ffc900] hover:text-[#ffc900] 
                 focus:outline-none active:scale-105 transition-all duration-400 ease-out md:mt-[40px] mt-[20px] "

            >{text}
            </button>
    
    )
}