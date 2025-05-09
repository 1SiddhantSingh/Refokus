import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Block = ({width , start , para, hover }) => {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl hover:bg-violet-600 ${width} min-h-[30rem] flex flex-col items-center justify-between` }>
       <div className='w-full'>
        <div className=' flex items-center justify-between px-3'>
          <h3>One Heading</h3>
          <FaArrowRightLong />
        
        </div>
        <h1 className='mt-5 font-medium text-3xl'>whatever heading</h1>
        </div>
        
        <div className=' down w-full  '>
          {
            start === true ? 
            <>
             <h1 className='mt-55 text-8xl font-medium leading-none'>Start a Project</h1>
       
       <button className='mt-5 rounded-full border-solid border-[1px] border-zinc-100 px-5 py-2'>Contact Us</button>
            </> : null 
          }
          {
            para === true ?
            <>
             <p className=' text-sm text-zinc-500 font-medium '>Lorem ipsum dolor sit amet.</p>
            </> : null 
          }
       
       
        </div>
        
       
      
    </div>
  )
}

export default Block