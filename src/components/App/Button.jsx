import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({title}) => {
  return (
    <div className=' px-3 py-1 border-2 text-black rounded-full bg-white border-solid w-33 h-10 flex items-center justify-between gap-2 '
    >
    
        <span className=' text-sm font-"medium"'>{title}</span>
        <FaArrowRightLong />
    </div>
  )
}

export default Button