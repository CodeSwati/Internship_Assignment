import React from 'react'

function PressRelease() {
  return (
    <div className='mt-12 md:mt-24'>
      <div className='flex items-center gap-6'>
          <h1 className='font-semibold text-lg md:text-3xl lg:text-5xl'>Press Releases</h1>
          <h3 className='items-end font-medium underline underline-offset-4 text-[10px] md:text-base lg:text-lg'>
            View All</h3>
      </div>

      <div className='mt-1 md:mt-14'>

         <div className='flex flex-col md:my-10'>

            {[{para:"Wix Wins Google Cloud Expansion Partner of the Year Award", 
             date:"June 14, 2022"},
            {para:"Wix Relaunches its Solution for Hotels- Now Powered by HotelRunner, Providing a Comp..",
            date:"June 7, 2022"},
            {para:"Wix and LegalZoom Join Forces to Offer Personalized Solutions for Small Businesses to..",
             date:"April 27, 2022"},
            {para:"Wix Events Launches Seating Map Builder",
            date:"April 18, 2022"}].map((item,index)=>
            <div className='mt-6 md:mt-10'>
              
              <h3 className='font-bold text-[10px] md:text-base'>{item.date}</h3>
              <div className='flex justify-between mt-[9px]'>
                <p className='text-[9px] md:text-sm lg:text-base w-[80%]'>{item.para}</p>
                <p className='cursor-pointer text-[8px] md:text-sm lg:text-base underline underline-offset-4 hover:text-blue-700'>
                  READ MORE</p>
              </div>
              <hr className='mt-8 md:mt-14 h-[1px] bg-zinc-600 border-0 '/>
            </div>
            )}    
         </div>
         
         
      </div>
    </div>
  )
}

export default PressRelease