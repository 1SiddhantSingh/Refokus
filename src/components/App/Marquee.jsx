import React from 'react'

const Marquee = ({val}) => {
  return (
    <div className='max-w-screen-xl flex items-center gap-30  mx-auto overflow-hidden whitespace-nowrap  py-10 '>
      {val.map(url =>
         <img src={url} className='flex-shrink-0 w-[7vw]' />
       )}

       {/* {val.map(url =>
         <img src={url} />
       )} */}
     
     
    </div>
  )
}

export default Marquee