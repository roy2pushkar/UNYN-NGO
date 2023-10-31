import React from "react";
import logo from "./assets/logo.png"

const Join = () => {
    return (
        <div className="ml-[150px] mr-[150px] pt-[48px] w-[480px] h-[562px]">
           <div className="flex flex-col justify-center items-end gap-y-2">
             <img className='  w-[108px] h-[72px] mr-[16%] ' src={logo} alt='arrow'>
               </img>
               <h5 className="font-bold text-[26px] leading-7  w-[243px] h-[24px] text-center ">
                Fill details to join
               </h5>
           </div>
<div class="w-[480px] h-[562px] ml-[150px] mr-[150px]">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4 relative">
      <label for="name" class="absolute px-2 -top-2 left-2 bg-white text-gray-600 text-xs">Name</label>
      <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your name" required />
    </div>

    <div class="mb-4 relative">
      <label for="email" class="absolute px-2 -top-2 left-2 bg-white text-gray-600 text-xs">Email</label>
      <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your email" required />
    </div>
     <div class="mb-4 relative">
      <label for="Phone Number" class="absolute px-2 -top-2 left-2 bg-white text-gray-600 text-xs">Phone Number</label>
      <input type="number" id="number" name="number" class="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your phone number" required />
    </div>
     <div class="mb-4 relative">
      <label for="text" class="absolute px-2 -top-2 left-2 bg-white text-gray-600 text-xs"> College</label>
      <input type="text" id="text" name="text" class="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your college name" required />
    </div>

    

    <div class="flex items-center justify-between">
     <button className="bg-blue-500 text-white font-normal w-[480px] h-[54px] py-2 px-4 mr-3 rounded-md">
      Join
    </button> 
    </div>
  </form>
</div>

        </div>
    )
}

export default Join;