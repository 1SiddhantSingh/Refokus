import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-6 px-3 flex items-center justify-between border-b-1 border-zinc-700  '>
    
    <img className='w-[10vh]' src='./image.png'/>
    <div className='links flex gap-14 ml-20 '>
        
        {["Home","Work","Culture","","News"].map((elem , index) =>
            
                elem.length === 0 ? <span className='w-[1.5px] h-7 bg-zinc-400 '></span> :
                <a className=' flex items-center gap-1 font-"satoshi"' href="#"  >
                {index === 1 && <span style={{boxShadow: "0 0 0.25em #00FF19"}}  className='inline-block w-2 h-2 rounded-full bg-green-500'></span> }
            {elem
            }</a>)}
        
    </div>
    <div>
        <Button />
    </div>
    
    </div>
    
  )
}

export default Navbar