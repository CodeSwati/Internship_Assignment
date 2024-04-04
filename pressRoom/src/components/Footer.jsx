import React from 'react'
import { SiWix } from "react-icons/si";
import { FaFacebookF,FaTwitter,FaYoutube,FaPinterestP,FaInstagram,FaLinkedinIn,FaTiktok } 
from "react-icons/fa6";

function Footer() {
  return (
    <div className='mt-10 md:mt-20 '>
      <hr className='h-[1px] bg-zinc-400 border-0 -mx-[1rem] md:-mx-[3rem] lg:-mx-[5rem]' /> 

      <div className='mx-[0.5rem] md:-mx-[1rem] lg:-mx-[3rem] mt-6 md:mt-12'>

          <div className='flex justify-between '>

              <div className='md:flex flex-col gap-3 hidden'>
                <h1 className='text-base lg:text-lg font-semibold'>Product</h1>
                 <div className='text-xs lg:text-sm flex flex-col gap-3' >
                  {["Website Templates","Website Builder","Website Design","Wix Features","App Market",
                  "App Market","Web Hosting","Domain Names","Website Accessibility","Mobile App Builder"]
                  .map((item,index)=>
                  <p> {item}</p>
                  )}    
                  </div>
              </div>
             
             <div className='hidden md:flex flex-col gap-3'>
              <h1 className='text-base lg:text-lg font-semibold'>Solutions</h1>
                <div className='text-xs lg:text-sm flex flex-col gap-3' >
                    {["Online Store","Online Booking","Online Booking","Blog Website","Portfolio Website",
                    "eCommerce Website","Wix Studio","Enterprise Solutions","Enterprise Solutions",
                    "Student Website","Professional Tools","Logo Maker"]
                    .map((item,index)=>
                    <p> {item}</p>
                    )}    
                </div>
             </div>

             <div className='hidden md:flex flex-col gap-3'>
              <h1 className='text-base lg:text-lg font-semibold'>Support</h1>
                <div className='text-xs lg:text-sm flex flex-col gap-3' >
                    {["Help Center","Hire a Professional","Report Abuse","System Status"]
                    .map((item,index)=>
                    <p> {item}</p>
                    )}    
                </div>
             </div>
              
             <div className='hidden md:flex flex-col gap-3'>
              <h1 className='text-base lg:text-lg font-semibold'>Company</h1>
                <div className='text-xs lg:text-sm flex flex-col gap-3' >
                    {["Press & Media","Investor Relations","Wix Capital","Accessibility Statement",
                    "Patent Notice","Sitemap","Careers"]
                    .map((item,index)=>
                    <p> {item}</p>
                    )}    
                </div>
             </div>

             <div className='flex flex-col gap-3 w-[80%] md:w-1/5'>
                 <SiWix className='text-4xl md:text-5xl lg:text-7xl' />
                  <p className='text-[10px] md:text-base lg:text-lg'>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to 
                    advanced SEO and marketing tools-enabling anyone to create and grow online.</p>
                    <p className='text-[9px] md:text-sm lg:text-base'>&copy; 2006-2024 Wix.com, Inc</p>
                    <div className='flex gap-2'>
                    {[ <FaFacebookF />,<FaTwitter />,<FaYoutube />,<FaPinterestP />,<FaInstagram />,
                    <FaLinkedinIn />,<FaTiktok />]
                    .map((item,index)=>
                      <p className='text-sm lg:text-base'> {item}</p>
                    )}

                    </div>
             </div>

           </div>
        </div>
    </div>
  )}
export default Footer;