import React from "react";
import { main, business, payments } from "../data";

const SidePane = () => {
  return (
    <>
      <div className="w-[70%] mx-auto my-1.5">
        {main.map((item) => (
          <div key={item.id} className="flex flex-row items-center my-2">
            <img src={item.icon} alt={item.label} className="mr-2.5"/>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="w-[70%] mx-auto my-2">
        <p className="font-[550]">BUSINESS</p>
        {business.map((item) => (
          <div key={item.id} className="flex flex-row items-center my-2">
            <img src={item.icon} alt={item.label} className="mr-2.5"/>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className="w-[70%] mx-auto my-1.5">
        <p className="font-[550]">PAYMENTS</p>
        {payments.map((item) => (
          <div key={item.id} className="flex flex-row items-center my-2">
            <img src={item.icon} alt={item.label} className="mr-2.5"/>
            <div>
            <p className={`${item.isNew ? "text-[#5444F2]" : ""}`}>{item.label}</p>
            <p className={`text-xs text-[#02BA81] font-semibold ${!item.isNew ? "hidden" : ""}`}>New</p>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default SidePane;
