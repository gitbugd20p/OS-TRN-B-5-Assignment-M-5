import React from "react";
import ExpensesItems from "../components/ExpensesItems";
import { Progress } from "@material-tailwind/react";
import {
  FaCartShopping,
  FaBus,
  FaHouse,
  FaUtensils,
  FaFilm,
} from "react-icons/fa6";
import MoneySpendComp from "../components/MoneySpendComp";

const Expenses = () => {
  const expensesData = [
    {
      date: "Today",
      items: [
        {
          id: 1,
          category: "Grocery",
          amount: -326800,
          time: "5:12 pm",
          description: "Belanja di pasar",
          icon: FaCartShopping,
          iconBg: "#4F46E5", // blue-600
        },
        {
          id: 2,
          category: "Transportation",
          amount: -15000,
          time: "5:12 pm",
          description: "Naik bus umum",
          icon: FaBus,
          iconBg: "#22C55E", // green-500
        },
        {
          id: 3,
          category: "Housing",
          amount: -185750,
          time: "5:12 pm",
          description: "Bayar Listrik",
          icon: FaHouse,
          iconBg: "#F59E0B", // amber-500
        },
      ],
    },
    {
      date: "Monday, 23 March 2020",
      items: [
        {
          id: 4,
          category: "Food and Drink",
          amount: -156000,
          time: "5:12 pm",
          description: "Makan Steak",
          icon: FaUtensils,
          iconBg: "#EF4444", // red-500
        },
        {
          id: 5,
          category: "Entertainment",
          amount: -35200,
          time: "5:12 pm",
          description: "Nonton Bioskop",
          icon: FaFilm,
          iconBg: "#6366F1", // indigo-500
        },
      ],
    },
  ];

  const spendingData = [
    {
      id: 1,
      category: "Food and Drinks",
      amount: 872400,
      value: 50, // % value for progress bar
    },
    {
      id: 2,
      category: "Shopping",
      amount: 1378200,
      value: 80,
    },
    {
      id: 3,
      category: "Housing",
      amount: 928500,
      value: 60,
    },
    {
      id: 4,
      category: "Transportation",
      amount: 420700,
      value: 35,
    },
    {
      id: 5,
      category: "Vehicle",
      amount: 520000,
      value: 40,
    },
  ];

  return (
    <div className="h-screen overflow-hidden rounded-4xl bg-white text-black">
      <div className="flex h-full justify-between">
        <div className="left-side w-2/3 p-10">
          <div className="main-content">
            {/* title */}
            <div className="title-user">
              <div className="mb-3 flex items-center justify-between">
                <h1 className="text-5xl font-semibold">Expenses</h1>
                <div className="user-box">
                  <img src="Users.png" alt="user.png" />
                </div>
              </div>
              <p>01-25 March,2020</p>
              <div className="mx-auto my-8 p-2">
                <img src="Stats.png" alt="graph" />
              </div>
            </div>

            {/* today data */}
            <div>
              <ExpensesItems expensesData={expensesData} />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="right-side w-1/3 bg-[#f9fafc] p-10">
          <h3 className="mb-8 font-semibold">Where your money go?</h3>

          <MoneySpendComp spendingData={spendingData} />

          <div className="mt-24 rounded-2xl bg-[#edf0f6] p-5">
            <div className="-mt-12 mb-8 flex justify-between">
              <img src="Illustration.png" alt="storage" />
              <img src="Illustration-flower.png" alt="flower" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="mb-2 text-2xl font-semibold">Save more money</h2>
              <p className="mb-4 text-gray-600">
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <button className="rounded bg-black px-4 py-2 text-white transition hover:bg-gray-700">
                VIEW TIPS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
