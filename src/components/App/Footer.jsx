import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10 gap-32 flex items-center justify-between'>
      <div className='basis-1/2'>
      <h1 className='text-[11rem] font-semibold leading-none tracking-tight '>refokus.</h1>

      </div>
      <div className='basis-1/2 flex gap-4'>
      <div className='social basis-1/3'>
        <h4 className='mb-10 text-zinc-500'>socials</h4>
       { ["instagram","twitter (x?)","LinkedIn"].map((elem, index) =>(
          <a className='block mt-3 capitalize text-zinc-600' href={elem} key={index}>{elem}</a>
        ))
}
      </div>
      <div className='social basis-1/3'>
        <h4 className='mb-10 text-zinc-500'>Sitemao</h4>
       { ["Home","Work","Careers","Contact"].map((elem, index) =>(
          <a className='block mt-3 capitalize text-zinc-600' href={elem} key={index}>{elem}</a>
        ))
}
      </div>
      <div className='social basis-1/2 items-end flex flex-col'>
       <p>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
        <img className='mt-10 flex-shrink-0 w-[9vw] ' src='https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg' />
       
      </div>
      
     

      
</div>
    </div>
  )
}

export default Footer