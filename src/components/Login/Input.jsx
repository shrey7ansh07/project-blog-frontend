export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder
}){
    return(
        <div className="my-8">
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className= "rounded-lg relative block md:w-[500px] w-[300px] px-3 md:py-4 py-2 border border-gray-300 placeholder-gray-400 focus:text-[#ffc900] focus:outline-none focus:ring-[#ffc900] focus:border-[#ffc900] focus:z-10 md:text-[16px] text-[10px] active:scale-105 transition-all duration-300 ease-out text-gray-300"
              placeholder={placeholder}
            />
          </div>
    )
}