import React from "react";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div className="p-5">
      <div className="flex h-screen flex-col">
        <div className="top-part mb-24">
          <img className="mb-4 rounded-md" src="Profile.png" alt="profile" />
          <h2 className="mb-2 text-4xl">Samantha</h2>
          <p>samantha@email.com</p>
        </div>
        <div className="bottom-part">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
