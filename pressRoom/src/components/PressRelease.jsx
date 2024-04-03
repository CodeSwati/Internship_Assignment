import React from 'react'

function PressRelease() {
  return (
    <div className='mt-24'>
      <div className='flex gap-6'>
          <h1 className='font-semibold text-5xl'>Press Releases</h1>
          <h3 className='self-end font-medium underline underline-offset-4 text-lg'>View All</h3>
      </div>

      <div className='mt-14'>

         <div className='flex flex-col my-10'>

            {[{para:"Wix Wins Google Cloud Expansion Partner of the Year Award", 
             date:"June 14, 2022"},
            {para:"Wix Relaunches its Solution for Hotels- Now Powered by HotelRunner, Providing a Comp..",
            date:"June 7, 2022"},
            {para:"Wix and LegalZoom Join Forces to Offer Personalized Solutions for Small Businesses to..",
             date:"April 27, 2022"},
            {para:"Wix Events Launches Seating Map Builder",
            date:"April 18, 2022"}].map((item,index)=>
            <div className='mt-10'>
              
              <h3 className='font-bold'>{item.date}</h3>
              <div className='flex justify-between mt-[9px]'>
                <p className='text-md '>{item.para}</p>
                <p className='text-md underline underline-offset-4'>READ MORE</p>
              </div>
              <hr className='mt-14 h-[1px] bg-zinc-600 border-0 '/>
            </div>
            )}    
         </div>
         
         
      </div>
    </div>
  )
}

export default PressRelease