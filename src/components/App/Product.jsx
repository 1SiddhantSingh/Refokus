import React from 'react'
import Button from './Button'

const Product = ({val}) => {
  return (
    <div className='w-full px-10 py-20 text-white'>
      <div className='max-w-screen-xl  mx- auto flex justify-between items-center'>
      <h1 className='text-5xl capitalize font-medium '>{val.title} </h1>
      <div className='dets w-1/4 '>
        <p className='mb-10'>{val.description}</p>
        <div className='flex gap-5 items-center'>
        {val.live && <Button title="Live Project" />}
       { val.case && <Button title="Case Study" />}
       </div>
      </div>
    
      </div>

    </div>
  )
}

export default Product