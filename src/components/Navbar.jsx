import React from "react";
import logos from "./assets/logo.png";

const Navbar = () =>{
    return (
        <>
  <div className=" flex justify-between items-center ml-[149px] mr-[150px]">
    <div className="flex justify-between items-center gap-4 mt-[16px]">
      <img className=" w-[108px] h-[80px]"  src={logos} alt="logo" />
      <p className="h-[18px] text-[#000000] ">About us</p>
      <p className="h-[18px] text-[#000000]">Services</p>
      <p className="h-[18px] text-[#000000]">Events</p>
      <p className="h-[18px] text-[#000000]">More</p>
    </div>
    <div>
    <button class="bg-blue-500  text-white font-bold py-2 px-4 rounded-full w-[175px] h-[48px]">
  Button
</button>
    </div>
  </div>
  </>
    )
}



export default Navbar 