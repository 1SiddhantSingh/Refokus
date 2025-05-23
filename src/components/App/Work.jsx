import React from 'react'

const Work = () => {
  const images = [
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%" , isActive:true },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left: "44%", isActive:false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "56%", isActive:false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "60%", left: "53%", isActive:false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "43%", left: "40%", isActive:false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "65%", left: "55%", isActive:false },
  ];

  return (
    <div className='w-full'>
      <div className='relative max-w-screen-xl mt-20 mx-auto text-center'>
        <h1 className='text-[30vw] leading-none select-none font-medium tracking-tight'>
          work
        </h1>

        {/* This container overlays the images over the word */}
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
          {images.map((elem, index) =>
          elem.isActive &&
          (
            <img
              key={index}
              className='absolute w-50 rounded-lg -translate-x-1/2 -translate-y-1/2'
              style={{ top: elem.top, left: elem.left }}
              src={elem.url}
              alt={`image-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
