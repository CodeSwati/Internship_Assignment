import React from "react";
import { FaFacebookSquare,FaInstagram,FaYoutube,FaTwitter} from "react-icons/fa";
import { SiWix } from "react-icons/si";

function Social(){
    return(
        <div className="mt-12 md:mt-24 lg:mt-36 flex flex-col gap-10 w-full">

            <div className="flex gap-4 md:gap-10 justify-between w-full">

                {[
                  {img:"https://static.wixstatic.com/media/701e00_e691edf90f52465abf7e9e14d304949d~mv2.jpg/v1/fill/w_279,h_279,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/701e00_e691edf90f52465abf7e9e14d304949d~mv2.jpg",
                    head:"Brand Assests",
                    para:"All of the official design assets and guidelines used by Wix can be found here, along with all the information you need about our graphic elements and the philosophy behind them."
                  },
                     
                {img:"https://static.wixstatic.com/media/aabc0d_45c1fe679362404697560377993956de~mv2.png/v1/fill/w_279,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aabc0d_45c1fe679362404697560377993956de~mv2.png",
                head:"About Us",
                para:"Wix makes it easy for everyone to get online with a stunning, professional and powerful web presence. Learn more about our company, customers, products and people."},

                {img:"https://static.wixstatic.com/media/311dce_a9ba8dba96c64276af67afd024b6158f~mv2.png/v1/fill/w_279,h_279,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/311dce_a9ba8dba96c64276af67afd024b6158f~mv2.png",
                head:"Investor Relations",
                para:"Information about Wix for investors and financial analysts. You can also find a company glossary, stats, and a list of IR events and presentations."}
                ].map((item,index)=>

                <div className=" flex flex-col gap-3 md:gap-6 w-1/3">
                    <img className="h-cover w-full" src={item.img} />
                    <h1 className="text-xs md:text-base lg:text-xl font-semibold">{item.head}</h1>
                    <p className="text-[9px] md:text-sm lg:text-base w-[88%]">
                        {item.para}</p>
                </div>
                )}
                
            </div>

            {/*  social  */}

             <div className="mt-2 md:mt-16 lg:mt-24 w-full">
                <h1 className="text-lg md:text-3xl lg:text-5xl font-semibold">Social</h1>

                <div className="flex w-full mt-6 md:mt-10">
                    {[<SiWix />, <FaFacebookSquare />,<FaInstagram />,<FaYoutube />,<FaTwitter />
                    ].map((item,idx)=>
                      <div className="flex items-center justify-center h-[4rem] md:h-36 lg:h-48 w-1/5 cursor-pointer
                      border-[1px]  border-zinc-600 hover:bg-blue-700 hover:border-blue-700 hover:text-white ">
                        <div className="text-lg md:text-3xl lg:text-5xl ">{item}</div>
                      </div>
                    )}
                    
                  </div>
                
             </div>
        </div>
    )
}

export default Social;