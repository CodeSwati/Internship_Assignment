import React from 'react'

function Contact() {
  return (
    <div className='flex gap-7 md:gap-20 mt-12 md:mt-24 w-[90%]'>
        <h1 className=' text-base md:text-3xl lg:text-5xl font-semibold w-[25%]'>Contact Us</h1>

        <div className='w-[75%] md:w-[69%] lg:w-[72%]'>
            <p className='text-[10px] md:text-base lg:text-xl'>If you&apos;re a member of the media and would like to get in touch, please send us a note.
                 For non-press-related inquiries, please use our
                 <span className='text-blue-600'> general contact page</span>.
            </p>

            <form className='flex flex-col gap-10 md:gap-16 mt-10 lg:mt-20 overflow-hidden'>
              <div className='flex gap-5 md:gap-10'>
                  <div className='w-[46%] '>
                    <input className='text-black placeholder-gray-800 text-[9px] md:text-base focus:outline-0 p-2' 
                    placeholder="First Name" maxlength="100"/>
                    <hr className='h-[1px] bg-zinc-600 border-0'/>
                  </div>
                  <div className='w-[46%]'>
                    <input className='text-black placeholder-gray-800 text-[9px] md:text-base focus:outline-0 p-2' 
                    placeholder="Phone" maxlength="100"/>
                    <hr className='h-[1px] bg-zinc-600 border-0 '/>
                  </div>
                </div>

                <div>
                   <input className='text-black placeholder-gray-800 w-full text-[9px] md:text-base  focus:outline-0 p-2' 
                    placeholder="Email" />
                    <hr className='h-[1px] bg-zinc-600 border-0 w-full'/>
                </div>
                
                <div className='border border-zinc-600 overflow-hidden h-24 md:h-48'>
                  <textarea className='p-4 focus:outline-none text-[9px] md:text-base' cols='70' rows='9'
                  placeholder='Type your message here..' aria-invalid="false" aria-required="false"></textarea>
                </div>

                <div className=''>
                   <input className='cursor-pointer px-4 py-1 md:px-14 md:py-2 border border-zinc-600 rounded-full
                    hover:bg-blue-700 hover:border-inherit hover:text-white text-xs md:text-base' 
                   type="submit" value="Send"/>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Contact