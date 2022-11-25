import React from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

const TransactionDetails = ({ transaction }) => {
  if (transaction.length === 0) {
    return;
  }
  const [detail] = transaction;
  const { name, icon, location, accountNumber, amount } = detail;
  return (
    <div className="h-full bg-[#FFEDE3] w-[29%] rounded-lg relative">
      <div className="h-[45px] bg-[#fff] mb-10 rounded-t-lg	p-1">
        <div className="flex flex-row items-center justify-between p-0.5 w-full">
          <p className="text-xs font-[550]">
            Activity Feed - <span className="text-[#65717C]">{name} </span>
          </p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-[#02BA81] text-[10px] font-semibold mr-1">
              Active
            </p>
            <p className="text-[#65717C] text-[10px] font-semibold">
              Created 16days ago
            </p>
          </div>
        </div>
      </div>
      <div className="h-[435px] bg-[#fff] mt-6 ">
        <img src={icon} alt={name} className="absolute top-16 left-2"/>
        <div className="flex flex-row items-center justify-between w-[95%] mx-auto my-2 pt-6 ">
          <div>
            <p className="text-xs font-semibold">{name}</p>
            <p className="text-[#65717C] text-xs">{accountNumber}</p>
          </div>
          <button className="text-xs font-semibold flex flex-row items-center border p-1.5 rounded-lg">
            <span>Go to Account View</span> <MdArrowForwardIos />
          </button>
        </div>
        <hr className="w-[95%] mx-auto" />
        <div className="flex flex-row items-center justify-between w-[95%] mx-auto my-3">
          <div>
            <p className="text-xs text-[#65717C]">Total Inflow</p>
            <h5 className="text-xs font-semibold">₦{amount}</h5>
          </div>
          <div>
            <p className="text-xs text-[#65717C]">Last Activity Date</p>
            <h5 className="text-xs font-semibold">13th Sept. 2022</h5>
          </div>
          <div>
            <p className="text-xs text-[#65717C]">Linked Branch</p>
            <button className="flex flex-row items-center text-xs font-semibold text-[#EA8A15] bg-[#F4F3FF] py-0.5 px-1 rounded-full ">
              <BsBoundingBoxCircles className="mr-1" />
              <span>{location}</span>
            </button>
          </div>
        </div>
        <hr className="w-[95%] mx-auto" />
        <table className="w-[95%] mx-auto">
          <thead>
            <tr>
              <th className="text-xs text-[#65717C]">Transaction Details</th>
              <th className="text-xs text-[#65717C]">Amount</th>
              <th className="text-xs text-[#65717C]">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-xs text-[#000] p-1.5">Olaoluwa S.</td>
              <td className="text-xs text-[#000] p-1.5">₦6,720.00</td>
              <td className="text-xs text-[#000] p-1.5">Today, 8mins ago</td>
              <td> <MdArrowForwardIos/></td>
            </tr>
            <tr>
              <td className="text-xs text-[#000]  p-1.5">Olaoluwa S.</td>
              <td className="text-xs text-[#000]  p-1.5">₦6,720.00</td>
              <td className="text-xs text-[#000] p-1.5">13th Aug - 3:15PM</td>
              <td> <MdArrowForwardIos/></td>
            </tr>
            <tr>
              <td className="text-xs text-[#000] p-1.5">Olaoluwa S.</td>
              <td className="text-xs text-[#000] p-1.5">₦10,720.00</td>
              <td className="text-xs text-[#000] p-1.5">15th Aug - 1:15PM</td>
              <td> <MdArrowForwardIos/></td>
            </tr>
            <tr>
              <td className="text-xs text-[#000] p-1.5">Olaoluwa S.</td>
              <td className="text-xs text-[#000] p-1">₦8,000.00</td>
              <td className="text-xs text-[#000] p-1.5">25th Aug - 12:15PM</td>
              <td> <MdArrowForwardIos/></td>
            </tr>
            <tr>
              <td className="text-xs text-[#000] p-1.5">Olaoluwa S.</td>
              <td className="text-xs text-[#000] p-1.5">₦6,720.00</td>
              <td className="text-xs text-[#000] p-1.5">30th Aug - 1:15PM</td>
              <td> <MdArrowForwardIos/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionDetails;
