import React from 'react'
import Block from './Block'

const Blocks = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto  py-22 flex gap-1'>
      <Block width={"basis-1/3"} start={false} para={true} />
      <Block  width={"basis-2/3"} start={true} para={false} hover={"bg-voilet-600"} />
      </div>
  
    </div>
  )
}

export default Blocks