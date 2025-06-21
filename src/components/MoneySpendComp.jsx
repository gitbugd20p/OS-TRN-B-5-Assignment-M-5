import React from "react";
import { Progress } from "@material-tailwind/react";

const MoneySpendComp = ({ spendingData }) => {
  return (
    <>
      {spendingData.map((item) => {
        return (
          <div key={item.id} className="mb-6">
            <div className="mb-2 flex justify-between">
              <p>{item.category}</p>
              <p>{item.amount}</p>
            </div>
            <div className="flex w-full flex-col gap-4">
              <Progress
                value={item.value}
                className="h-2 bg-gray-200 [&>div]:!bg-teal-500"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MoneySpendComp;
