import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-[90%] mx-auto my-3">
        <img src="/assets/bani.png" alt="logo" />
        <div className="flex flex-row items-center justify-between w-[22%]">
          <img src="/assets/bell.png" alt="notifications" />
          <div className="bg-[#F5F6FA] rounded-lg flex flex-row items-center justify-between w-[80%] p-2">
          <img src="/assets/jt.png" alt="companyLogo" />
          <div>
            <p className="font-normal text-base">JT Industry Limit..</p>
            <p className="text-xs text-[#65717C] font-normal">JamesT@gmail.com</p>
          </div>
          <MdOutlineKeyboardArrowDown className="text-2xl"/>
          </div>
        </div>
      </div>
  )
}

export default Navbar