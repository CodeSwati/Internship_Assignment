import React from 'react'

function Contact() {
  return (
    <div className='flex gap-20 mt-24 w-[90%]'>
        <h1 className='text-5xl font-semibold w-1/2'>Contact Us</h1>

        <div className='w-[72%]'>
            <p className='text-xl'>If you&apos;re a member of the media and would like to get in touch, please send us a note.
                 For non-press-related inquiries, please use our
                 <span className='text-blue-600'> general contact page</span>.
            </p>

            <form className='flex flex-col gap-16 mt-20'>
              <div className='flex gap-10'>
                  <div className='w-1/2 '>
                    <input className='text-black placeholder-gray-800 focus:outline-0 p-2' 
                    placeholder="First Name" maxlength="100"/>
                    <hr className='h-[1px] bg-zinc-600 border-0'/>
                  </div>
                  <div className='w-1/2'>
                    <input className='text-black placeholder-gray-800 focus:outline-0 p-2' 
                    placeholder="Phone" maxlength="100"/>
                    <hr className='h-[1px] bg-zinc-600 border-0 '/>
                  </div>
                </div>

                <div>
                   <input className='text-black placeholder-gray-800 focus:outline-0 p-2' 
                    placeholder="Email" />
                    <hr className='h-[1px] bg-zinc-600 border-0 '/>
                </div>
                
                <div className='border border-zinc-600'>
                  <textarea className='p-4 focus:outline-none' cols='70' rows='9'
                  placeholder='Type your message here..' aria-invalid="false" aria-required="false"></textarea>
                </div>

                <div className=''>
                   <input className='cursor-pointer px-14 py-2 border border-zinc-600 rounded-full
                    hover:bg-blue-700 hover:border-inherit hover:text-white' 
                   type="submit" value="Send"/>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Contact