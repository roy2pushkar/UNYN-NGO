import React from "react";
import starimg from './assets/starimg.png';
import testimonial1 from './assets/testimonial1.png';
import Testimonial2 from './assets/testimonial2.png';
import testimonials3 from './assets/testimonials3.png';

const Testimonials = () => {

    return(
       <div>
         <div className='ml-[149px] mr-[150px] mt-[140px]' >
           <div>
            <h2 className=' font-sans font-bold w-[450px] h-[54px] text-4xl leading-[3rem] '>
                   Member Testimonials
                </h2>
                
                <p className='w-[532px] h-[16px] text-[#888E95] text-[14px] font-normal leading-5'>
                   Here what our members have to say about their experience with UNYN 
                </p>
           </div>
           <div className="flex  justify-between items-center gap-8 mt-16">
               <div className="flex flex-col justify-start  gap-y-4">
                  <img className='w-[136px] h-[24px]' src={starimg} alt='about'>
               </img>
               <p className="text-[18px] font-semibold leading-5 w-[555px] h-[44px]">
                UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.
               </p>
               <div className="flex  justify-start items-center gap-4">
                  <img className='w-[60px] h-[60px]' src={testimonial1} alt='about'>
               </img>
               <div className="">
                <p className="text-[14px] font-normal leading-4 w-[64px] h-[16px]">Jhon Doe</p>
                <p className="text-[10px] font-normal leading-3 w-[170px] h-[12px]">Marketing Manager, XYZ Company</p>
               </div>
               </div>
               </div>
               <div className="flex flex-col justify-start  gap-y-4">
                  <img className='w-[136px] h-[24px]' src={starimg} alt='about'>
               </img>
               <p className="text-[18px] font-semibold leading-5 w-[555px] h-[44px]">
                UNYN has provided me with incredible opportunities to grow and connect with like-minded individuals.
               </p>
               <div className="flex  justify-start items-center gap-4">
                  <img className='w-[60px] h-[60px]' src={Testimonial2} alt='about'>
               </img>
               <div className="">
                <p className="text-[14px] font-normal leading-4 w-[64px] h-[16px]">Jhon Doe</p>
                <p className="text-[10px] font-normal leading-3 w-[170px] h-[12px]">Marketing Manager, XYZ Company</p>
               </div>
               </div>
               </div>
               
           </div>
        </div>
        <div className=" flex flex-col justify-center items-center  w-[1440px] h-[400px] bg-[#1AA7EC] mt-[140px]">
           <h2 className=' font-sans font-bold w-[817px] h-[58px] text-4xl leading-[3rem]  text-white '>
                  Empowering Your Potential with UNYN
                </h2>
                <p className='w-[417px] h-[22px] text-[#E8F6FD] text-[14px] font-normal leading-5'>
                  Join UNYN and unlock endless opportunities for growth
                </p>
                <div className="flex justify-start items-center gap-8 pr-4 mt-8">
                     <button class="bg-white text-blue-400 font-Normal py-2 px-4 rounded-full w-[165px] h-[48px]">
  Join 
</button>
 <button class="bg-[#1AA7EC] text-white border border-custom-border font-Normal py-2 px-4 rounded-full w-[150px] h-[48px]">
  Go evolved
</button>

                </div>
        </div>
        <div className="ml-[149px] mr-[150px] mt-[140px]">
           
                <div className='flex justify-center items-center  gap-12'>
            <div>
                <h2 className=' font-sans font-bold w-[555px] h-[116px] text-4xl leading-[3rem] '>
                Stay Updated with UNYN Newsletter
                </h2>
                <p className='w-[498px] h-[20px] text-[#888E95] text-[16px] font-normal leading-5'>
                   Gets the latest updates, news and exciting opportunities for UNYN.
                </p>
                <div className=" flex gap-4 mt-2">
  
             
             <input type="email" id="email" name="email" className="w-[340px] h-[48px]  px-2 py-2 border rounded-full shadow-sm focus:outline-none focus:ring border-[#1AA7EC]" placeholder="enter your email" />

            <button className=" bg-blue-500  text-white font-bold py-2 px-4 mr-3 rounded-full w-[165px] h-[48px]">
  Sign Up
</button>
             </div>
             <p className="w-[308px] h-[17px] font-normal text-[12px] leading-3 pt-2 text-[#888E95]">
                By signing up, you agree to our Term and Conditions.
             </p>
            </div>
            <div className=''>
               <img className='w-[555px] h-[310px]' src={testimonials3} alt='about'>
               </img>
               
            </div>

        </div>
            </div>
        </div>
       
    )
}

export default Testimonials;