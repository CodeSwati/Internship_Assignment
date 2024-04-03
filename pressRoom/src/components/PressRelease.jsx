import React from 'react'

function PressRelease() {
  return (
    <div className='mt-8'>
      <div className='flex gap-6'>
          <h1 className='font-semibold text-4xl'>Press Release</h1>
          <h3 className='self-end font-medium underline underline-offset-4 text-sm'>View All</h3>
      </div>

      <div className=''>
         <h3 className='font-semibold'>June 14, 2022</h3>
         <div className='flex justify-between'>
            <p className='text-sm '>Wix Wins Google Cloud Expansion Partner of the Year Award</p>
            <p className='text-sm underline underline-offset-4'>READ MORE</p>
         </div>
      </div>
    </div>
  )
}

export default PressRelease