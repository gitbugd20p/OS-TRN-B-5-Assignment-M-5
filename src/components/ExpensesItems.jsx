import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const ExpensesItems = ({ expensesData }) => {
  return (
    <>
      {expensesData.map((section) => {
        return (
          <div key={section.date} className="mb-4">
            <h3 className="text-3xl font-semibold">{section.date}</h3>
            <div className="my-3 border-1 border-gray-100"></div>

            {section.items.map((item) => {
              return (
                <div key={item.id} className="flex justify-between">
                  <div className="flex gap-3 py-3">
                    <div
                      className="rounded-[50%] p-4 text-2xl"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      <item.icon color="white" />
                    </div>
                    <div>
                      <h2 className="font-semibold">{item.category}</h2>
                      <div className="flex gap-4 text-gray-500">
                        <p>{item.time}</p>
                        <li>{item.description}</li>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-medium">-326.800</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default ExpensesItems;
