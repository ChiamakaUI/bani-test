import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SidePane from "../components/SidePane";
import { settings } from "../data";
import { BsBoundingBoxCircles, BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Transactions from "../components/Transactions";
import { transactions } from "../data";
import TransactionDetails from "../components/TransactionDetails";
const Dashboard = () => {
  const [activeTransaction, setActiveTransaction] = useState(1);
  const [activeTransactionDetails, setActiveTransactionDetails] = useState([]);
  useEffect(() => {
    const activeDetail = transactions.filter(transaction => transaction.id === activeTransaction)
    setActiveTransactionDetails(activeDetail)
  }, [activeTransaction])
  return (
    <div className="bg-[#fff] w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-row w-full">
        <div className="w-[18%] flex flex-col items-center justify-between">
          <SidePane />
          <hr className="w-full" />
          <div className="w-[70%] mx-auto my-2">
            {settings.map((item) => (
              <div key={item.id} className="flex flex-row items-center my-2">
                <img src={item.icon} alt={item.label} className="mr-2.5" />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F5F6FA] w-[88%] ">
          <div className="flex flex-row items-center justify-between w-[95%] mx-auto my-3">
            <h5 className="text-xl font-[550]">Virtual Account Dashboard</h5>
            <div className="flex flex-row items-center justify-between w-[38%]">
              <button className="border flex flex-row items-center bg-[#FFFFFF] w-[185px] h-[44px] rounded-lg ">
                <BsBoundingBoxCircles className="mx-1.5" />{" "}
                <span>Create New Branch</span>
              </button>
              <button className="flex flex-row items-center bg-[#5444F2] w-[205px] h-[44px] rounded-lg text-[#FFFFFF]">
                <BsPlus className="text-2xl mx-px" />{" "}
                <span>Create Virtual Account</span>
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-[95%] mx-auto">
            <div className="h-full w-[70%]">
              <div className="bg-[#fff] border h-[119px] my-2.5 rounded-lg p-3.5">
                <div className="flex flex-row items-center justify-between w-[90%] my-auto h-[90%] ml-4">
                  <div>
                    <p className="text-[#65717C] text-sm font-normal">
                      Total Credits
                    </p>
                    <h5 className="text-2xl font-[550]">NGN 3,287,902.00</h5>
                  </div>
                  <div>
                    <p className="text-[#65717C] text-sm font-normal">
                      Total Transfer Settlements
                    </p>
                    <h5 className="text-2xl font-[550]">81 Settlements</h5>
                  </div>
                  <div>
                    <p className="text-[#65717C] text-sm font-normal">
                      Generated Accounts
                    </p>
                    <h5 className="text-2xl font-[550]">12 Accounts</h5>
                  </div>
                </div>
              </div>
              <div className="h-[376px] border bg-[#fff] my-2.5 rounded-lg">
                <div className="flex flex-row items-center justify-between w-[95%] mx-auto my-1.5">
                  <h5 className="text-base font-[550]">
                    Your Virtual Accounts
                  </h5>
                  <div className="flex flex-row items-center justify-between w-[12%]">
                    <img src="/assets/grid.png" alt="grid" />
                    <img src="/assets/row.png" alt="row" />
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-row items-center justify-between w-[95%] mx-auto my-2">
                  <button className="text-[#5444F2] bg-[#F4F3FF] w-[89px] h-[34px] rounded-full font-[550]">
                    Branch
                  </button>
                  <div className="relative w-[50%]">
                    <input
                      type="text"
                      placeholder="Search for virtual account"
                      className="border w-full h-[44px] rounded-lg p-1.5"
                    />
                    <CiSearch className="absolute top-3 right-2 text-xl" />
                  </div>
                </div>
                <hr className="w-full" />
                <div className="flex flex-row items-center justify-between w-[95%] mx-auto my-2">
                  <p className="text-base font-[550]">Lekki II</p>
                  <div className="flex flex-row items-center justify-between w-[12%]">
                    <p className="text-base font-[550] text-[#5444F2]">
                      Manage
                    </p>
                    <img src="/assets/hexagon.png" alt="icon" />
                  </div>
                </div>
                <Transactions
                  transactions={transactions}
                  active={activeTransaction}
                  setActive={setActiveTransaction}
                  setActiveTransaction={setActiveTransactionDetails}
                />
              </div>
            </div>
            <TransactionDetails transaction={activeTransactionDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
