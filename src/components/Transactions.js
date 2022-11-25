import React, { useState }  from "react";
import Transaction from "./Transaction";

const Transactions = ({ transactions, active, setActive, setActiveTransaction }) => {
  const [selected, setSelected] = useState("");
  return (
    <table className="w-[90%] mx-auto">
      <thead>
        <tr>
          <th className="text-base text-[#65717C] font-normal">Bank Name</th>
          <th className="text-base text-[#65717C] font-normal">
            Account number
          </th>
          <th className="text-base text-[#65717C] font-normal">Total inflow</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            bankIcon={transaction.icon}
            bankName={transaction.name}
            accountNumber={transaction.accountNumber}
            bankLocation={transaction.location}
            amount={transaction.amount}
            id={transaction.id}
            isActive={active === transaction.id}
            setIsActive={setActive}
            setActiveTransaction={setActiveTransaction}
            setSelectedText={setSelected}
            selectedText={selected}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
