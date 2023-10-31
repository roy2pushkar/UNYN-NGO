import React, { useState } from "react";
import mail from "./assets/mail.png";
import phone from "./assets/phone.png";
import locaton from "./assets/location.png";

const ContactUs = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    form.action = "mailto:recipient@example.com"; // Replace with the recipient's email

    form.submit();

    setIsFormSubmitted(true);
  };
    return (

        <div className="ml-[149px] mr-[150px] mt-[140px] flex justify-between items-center gap-16 ">
          <div className="flex flex-col justify-start gap-y-4">
            <h2 className="font-bold text-[44px] leading-[3rem] text-[#000000] w-[256px] h-[58px]">
                Get in touch
            </h2>
            <span className=" font-normal text-[14px] leading-5 text-[#5F6368] ">
                
               <b className="text-[#0B4765]">Contact with our team</b>  to talk about how we can <br />help your business process at scale, or sign up for <br /> more info
            
            </span>
           <div className="flex justify-start gap-2">
             <img className='w-[24px] h-[24px]' src={locaton} alt='about'>
               </img>
             <p className=" font-normal text-[14px] leading-4 text-[#000] w[316px] h-[44px]">
                1-4929, Lane No. 6, Balbirnagar Ext.,<br /> Shahdara, Delhi 110032
            </p>
            
           </div>
           <div className="flex justify-start gap-2">
             <img className='w-[24px] h-[24px]' src={phone} alt='about'>
               </img>
            <p className="font-normal text-[16px] leading-5 text-[#000]">
                +91-8888888888
            </p>
            
           </div>
           <div className="flex justify-start gap-2">
            <img className='w-[24px] h-[24px]' src={mail} alt='about'>
               </img>
            <p className="font-normal text-[16px] leading-5 text-[#000]">
                info@unyn.com
            </p>
             
           </div>
          </div>
          <div className="relative">
  <form onSubmit={handleSubmit}
  className="">
    <div className="w-[555px] h-[552px] flex flex-col items-center gap-y-4 ml-2  mb-[-248px]  flex-shrink-0 shadow-lg shadow-rgba(26, 167, 236, 0.12)">
    <h2 className="font-bold text-[36px] leading-[3rem] text-[#000000] w-[256px] h-[58px]">
      Say something
    </h2>

    <input type="text" id="name" name="name" className="w-[480px] h-[54px] px-2 py-2 border rounded-md shadow-sm focus:outline-none focus:ring border-[#1AA7EC]" placeholder="your name..." required />

    <input type="email" id="email" name="email" className="w-[480px] h-[54px] px-2 py-2 border rounded-md shadow-sm focus:outline-none focus:ring border-[#1AA7EC]" placeholder="your mail..." required />

    <textarea id="message" name="message" rows="8"  className="w-[480px] px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring border-[#1AA7EC]" placeholder="Enter your message..." required></textarea>

    <button className="bg-blue-500 text-white font-normal w-[480px] h-[54px] py-2 px-4 mr-3 rounded-md">
      Join
    </button>
  </div>
  {isFormSubmitted && (
        <div className="text-center text-white">
          Form submitted! Please check your email.
        </div>
      )}
  </form>
</div>

        </div>
    )
}

export default ContactUs;