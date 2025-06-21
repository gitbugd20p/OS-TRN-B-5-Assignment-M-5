import React from "react";

const Dashboard = () => {
  return (
    <div className="h-screen rounded-4xl bg-white p-5 text-black">
      <div className="h-screen overflow-hidden rounded-4xl bg-white text-black">
        <div className="p-10">
          <h1 className="text-5xl font-semibold">Dashboard</h1>
          <h2 className="text-2xl font-medium text-gray-700">
            Click on{" "}
            <span className="text-6xl font-bold text-red-600 underline underline-offset-4">
              Expenses
            </span>{" "}
            in the sidebar to view your expense details.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
