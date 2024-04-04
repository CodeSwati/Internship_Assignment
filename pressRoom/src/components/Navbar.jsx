import React from 'react'

function Navbar() {
  return (
    <div className='w-full overflow-hidden'>
        <h1 className='font-bold text-2xl md:text-5xl lg:text-7xl '>Press Room</h1>
        <h2 className='text-[10px] md:text-base lg:text-lg font-normal mt-2 '>All the News You Need to Know about Wix</h2>

        <div className='mt-6'>
           <hr className='h-[1px] bg-zinc-400 border-0 '/>
           <div className='flex items-center mt-4 gap-4 md:gap-6 text-[10px] md:text-base lg:text-lg whitespace-nowrap'>
                <h2 className='text-blue-600'>Press Room</h2>
                <div className='h-4 md:h-6 border-l border-zinc-700'></div>
                <h2>Press Releases</h2>
                <div className='h-4 md:h-6 border-l border-zinc-700'></div>
                <h2>In The News</h2>
           </div>
           <hr className='mt-4 h-[1px] bg-zinc-400 border-0  '/>
        </div>
    </div>
  )
}

export default Navbar