import React from 'react'

function Navbar() {
  return (
    <div>
        <h1 className='font-bold text-5xl '>Press Room</h1>
        <h2 className='text-sm font-medium mt-1 tracking-tight'>All the News You Need to Know about Wix</h2>

        <div className='mt-6'>
           <hr className='h-[1.4px] bg-zinc-300 border-0 '/>
           <div className='flex items-center mt-4 gap-6 text-sm'>
                <h2 className='text-blue-600'>Press Room</h2>
                <div className='h-4 border border-zinc-400'></div>
                <h2>Press Releases</h2>
                <div className='h-4 border border-zinc-400'></div>
                <h2>In The News</h2>
           </div>
           <hr className='mt-4 h-[1.1px] bg-zinc-300 border-0 '/>
        </div>
    </div>
  )
}

export default Navbar