import React from 'react';
import group11 from "./assets/Group 11.png";
import group12 from "./assets/Group 12.png";
import group14 from "./assets/Group 14.png";
import learnmore from "./assets/Learnmore.png";




const Events = () => {
    return (
        <div className='ml-[149px] mr-[150px] mt-[140px]'>
            <div className='flex flex-col justify-center items-center'>
                <p className='w-[74px] h-[22px] text-[#000] font-semibold font-sans leading-5 text-lg'>
                    Empower
                </p>
                <h2 className=' w-[590px] h-[50px] text-[#000] text-4xl font-bold leading-[3rem] '>
                    Unlock Your Potential with UNYN
                </h2>
                <p className='w-[710px] h-[66px] text-[#888E95] text-[16px] font-normal leading-5 text-center'>
                    At UNYN, we offer a range of impactful programs and events designed to empower young individuals. From mentorship programs to networking events and international collaborations, we provide the resources and support needed to help you thrive.
                </p>
            </div>
            <div className='flex justify-between items-center gap-[84px] mt-[74px]'>
                <div className='flex flex-col justify-between items-center gap-y-3'>
                     <img className='w-[60px] h-[60px] ' src={group11} alt='about'>
                  </img>
                  <h6 className=' w-[229px] h-[29px] text-[#000] text-xl font-bold leading-[3.5rem]'>
                    Mentorship Programs
                  </h6>
                  <p className='w-[324px] h-[44px] text-[#888E95] text-[16px] font-normal leading-5 text-center'>
                    Connect with experienced mentors who will guide you towards success.
                  </p>
               
               </div>
                <div className='flex flex-col justify-between items-center gap-y-3'>
                    <img className='w-[60px] h-[60px]' src={group12} alt='about'>
                        
               </img>
                <h6 className=' w-[202px] h-[29px] text-[#000] text-xl font-bold leading-[3.5rem]'>
                    Networking Events
                  </h6>
                  <p className='w-[324px] h-[44px] text-[#888E95] text-[16px] font-normal leading-5 text-center'>
                    Expand your network and forge valuable connections with like- minded individual.
                  </p>
                </div>
                <div className='flex flex-col justify-between items-center gap-y-3'>
                    <img className='w-[60px] h-[60px]' src={group14} alt='about'>
               </img>
                <h6 className=' w-[303px] h-[29px] text-[#000] text-xl font-bold leading-[3.5rem]'>
                    International Collaborations
                  </h6>
                  <p className='w-[324px] h-[44px] text-[#888E95] text-[16px] font-normal leading-5 text-center'>
                    Gain global exposure and collaborate with students from different ocuntries.
                  </p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-[48px] gap-8'>
                <button class="bg-blue-500  text-white font-bold py-2 px-4 rounded-full w-[175px] h-[48px]">
  Join 
</button>
<img className='w-[84px] h-[18px]' src={learnmore} alt='arrow'>
               </img>
            </div>
            <div className='mt-[160px]'>

            </div>
        </div>
    )
}

export default Events ;