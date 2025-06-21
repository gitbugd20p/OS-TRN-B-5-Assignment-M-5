import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <section className="bg-[#101010] text-white rounded-4xl">
      <div className="flex w-full p-10">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <main className="w-5/6">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default Layout;
