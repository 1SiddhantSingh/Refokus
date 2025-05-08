import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
  return (
    <div className=' px-3 py-1 border-2 text-black rounded-lg bg-white border-solid min-w-25 h-9 flex items-center justify-between gap-2 '
    >
    
        <span className=' text-xs font-"medium"'>Get Started</span>
        <FaArrowRightLong />
    </div>
  )
}

export default Button