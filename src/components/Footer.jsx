import React from 'react';
import logoW from "./assets/logoWhite.png"

const Footer = () => {
    return (

        <div className='bg-[#1AA7EC] w-[1440px] h-[609px] mt-[40px]'>
            <div className='ml-[149px] mr-[150px] pt-[249px] flex justify-between items-center gap-24 '>
           <div className='flex flex-col justify-start gap-y-4'> 
           <img className='w-[108px] h-[28px]' src={logoW} alt='logo'>
               </img>
               <p className='w-[458px] h-[44px] text-[#E8F6FD] text-[17px] font-normal leading-5 '>
                Stay up to date on the latest features and releases by joining our newslatter.
               </p>
               <div className=" flex gap-4 ">
  
             
             <input type="email" id="email" name="email" className="w-[264px] h-[48px]  px-2 py-2 border rounded-full shadow-sm focus:outline-none focus:ring border-[#1AA7EC]" placeholder="enter your email" />

            <button className=" bg-white  text-blue-500 font-normal py-2 px-4 mr-3 rounded-full w-[165px] h-[48px]">
                 Subscribe
            </button> 
            
    
             </div>
             <p className='w-[452px] h-[24px] text-[#E8F6FD] text-[12px] font-normal leading-3 flex flex-shrink-0'>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
               </div>
               
           <div className='flex flex-col justify-start gap-y-4 '>
            <p className=' text-[#E8F6FD] text-[18px] font-bold leading-5'>
                Quick Links
            </p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Home</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>About us</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Services</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Events</p>
           </div>
           <div className='flex flex-col justify-start gap-y-4  '>
            <p className=' text-[#E8F6FD] text-[18px] font-bold leading-5'>
                Updates
            </p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>News</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Blog</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>FAQ’s</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Contact us</p>
           </div>
           <div className='flex flex-col justify-start gap-y-4 '>
            <p className=' text-[#E8F6FD] text-[18px] font-bold leading-5'>
                Follow us
            </p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Twitter</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Facebook</p>
            <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>Instagram</p>
            
           </div>
        </div>

        <hr className='ml-[149px] mr-[150px] w-[1140px] mt-[32px]'></hr>
        <div className='flex justify-between items-center ml-[149px] mr-[150px] mt-[24px]'>
            <div className='flex justify-between items-center gap-4 text-white '>
            <div>
                   <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>
                    @2023UNYN.All rights reserved
                   </p>
            </div>
            <div>
                <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>
                    Privacy Policy
                </p>
            </div>
            <div>
                <p className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>
                    Term of Service
                </p>
            </div>
        </div>
        <div className='text-[#FFFFFF] text-[14px] font-normaal leading-3'>
            Design and Developed by InGelt Pvt. Ltd.
        </div>
        </div>
        </div>
    )
}

export default Footer;