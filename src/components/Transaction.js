import React from "react";
import { BiCopy } from "react-icons/bi";
import { BsBoundingBoxCircles } from "react-icons/bs";

const Transaction = ({
  bankIcon,
  bankName,
  accountNumber,
  bankLocation,
  amount,
  isActive,
  setIsActive,
  id,
}) => {
  return (
    <tr
      className={`cursor-pointer ${
        isActive ? "border-l-4 border-[#5444F2] bg-[#F8F9FB]" : ""
      }`}
      onClick={() => setIsActive(id)}
    >
      <td className="py-1 px-2">
        <img src={bankIcon} alt={bankName} />
      </td>
      <td>{bankName}</td>
      <td>{accountNumber}</td>
      <td>
        <BiCopy />
      </td>
      <td>
        <button
          className={`flex flex-row items-center bg-[#F4F3FF] px-1.5 py-1 ${
            id % 2 === 0 ? "text-[#1A72F7]" : "text-[#EA8A15]"
          } rounded-lg`}
        >
          <BsBoundingBoxCircles className="mr-1" />
          <span>{bankLocation}</span>
        </button>
      </td>
      <td>{amount}</td>
      <td>
        <img src="/assets/menu.png" alt="more" />
      </td>
    </tr>
  );
};

export default Transaction;
