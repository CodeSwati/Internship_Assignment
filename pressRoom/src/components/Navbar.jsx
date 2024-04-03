import React from 'react'

function Navbar() {
  return (
    <div>
        <h1 className='font-bold text-7xl '>Press Room</h1>
        <h2 className='text-lg font-normal mt-2 '>All the News You Need to Know about Wix</h2>

        <div className='mt-6'>
           <hr className='h-[1.4px] bg-zinc-400 border-0 '/>
           <div className='flex items-center mt-4 gap-6 text-lg'>
                <h2 className='text-blue-600'>Press Room</h2>
                <div className='h-6 border-l border-zinc-700'></div>
                <h2>Press Releases</h2>
                <div className='h-6 border-l border-zinc-700'></div>
                <h2>In The News</h2>
           </div>
           <hr className='mt-4 h-[1.1px] bg-zinc-400 border-0 '/>
        </div>
    </div>
  )
}

export default Navbar