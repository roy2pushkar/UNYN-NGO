import React from 'react';
import about from "./assets/bodyimg.png";
import dot from "./assets/dot.png";
import arrow from "./assets/arrow.png";
import learnmore from "./assets/Learnmore.png";
import abtimg from "./assets/abtimg.png";


const About = () => {
    return (
        <div className='ml-[149px] mr-[150px]'>
        <div className='flex justify-center items-center  gap-8'>
            <div>
                <h1 className=' font-sans font-bold w-[543px] h-[231px] text-6xl leading-[3.5rem] '>
                    Empowering Youth for a Brighter Future
                </h1>
                <p className='w-[543px] h-[110px] text-[#888E95] text-[16px] font-normal leading-5'>
                    United Youth Network (UNYN) is a dynamic and impactful
international student society committed to nurturing the talents and potential of young individuals across colleges and universities of different countries. Join us today to be a part of our mission to create a brighter and more promising future.
                </p>
                <span className='flex justify-start items-center gap-8'>
                    <button class="bg-blue-500  text-white font-bold py-2 px-4 rounded-full w-[175px] h-[48px]">
  Join 
</button>
<img className='w-[112px] h-[24px]' src={learnmore} alt='arrow'>
               </img>
                </span>
            </div>
            <div className=''>
               <img className='w-[555px] h-[639px]' src={about} alt='about'>
               </img>
               <div className='w-[555px] h-[152px] p-3 bg-[#E8F6FD]'>
                <p className='w-[225px] h-[24px] text-[16px] font-semibold leading-6'>Empower the Youth Today</p>
               <p className='w-[300px] h-[16px] text-[16px] font-light leading-5 font-sans'>Unlock Your Potential and Make a Diffrence </p>
               <div className='flex justify-between items-center mt-16 '>
               <img className='w-[32px] h-[8px]' src={dot} alt='dot'>
                 
               </img>
               <img className='w-[32px] h-[32px]' src={arrow} alt='arrow'>
               </img>
               </div>
               </div>
            </div>

        </div>
        <div className='mt-[147px] flex justify-between items-center'>
     <h2 className='text-[#000] text-5xl font-bold leading-[3.5rem] w-[602px] h-[174px]'>
        Empowering Youth for a Brighter Future: <p className='text-[#106690]'>UNYN’s Impact on Youth Individuals</p>
     </h2>
     <p className='w-[493px] h-[132px] text-[#888E95] text-[16px] font-normal leading-5'>
        United Youth Network (UNYN) is dedicated to empowering young
 individuals by providing them with opportunities for growth and development. Through our international student society, we aim to nurture their talents and unlock their full potential. By investing in the youth today,
 we believe that we can create a brighter and more promising future for tomorrow.
     </p>
        </div>
        <div className=' mt-28 '>
            <img className='w-[1140px] h-[690px] ' src={abtimg} alt='abtimg'>
               </img>
        </div>
        </div>
    )
}

export default About ;