import React from 'react'

function InNews() {
  return (
    <div className='mt-16'>
      <div className='flex gap-6'>
          <h1 className='font-semibold text-4xl'> In The News</h1>
          <h3 className='self-end font-medium underline underline-offset-4 text-sm'>View All</h3>
      </div>

      <div className='mt-14'>

         <div className='flex flex-col my-10'>

            {[{para:"How E-Scooters are transforming tel aviv", head:"Bloomberg",
             date:"April 28, 2022"},
            {para:"wix, legalZoom collaborate to boost online presence of small businesses",
            head:"Benzings", date:"April 27, 2022"},
            {para:"Wix partners with agencies to build high-performance websites for scalable growth",
             head:"HostingAdvice.com", date:"April 26, 2022"},
            {para:"nurturing a developer-centric culture",
            head:"DevOps.com", date:"April 18, 2022"}].map((item,index)=>

            <div className='mt-10 flex flex-col justify-center gap-3'>
              
              <h3 className='font-normal text-sm'>{item.date}</h3>
              <h1 className='font-semibold'>{item.head}</h1>
              <div className='flex justify-between '>
                <p className='text-sm capitalize'>{item.para}</p>
                <p className='text-sm underline underline-offset-4'>READ MORE</p>
              </div>
              <hr className='mt-14 h-[1px] bg-zinc-400 border-0 '/>
            </div>
            )}    
         </div>
         
         
      </div>
    </div>
  )
}

export default InNews;