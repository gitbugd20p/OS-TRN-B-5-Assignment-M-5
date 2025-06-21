import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex list-none flex-col gap-3">
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/expenses">Expenses</Link>
      </li>
      <li>
        <Link to="/wallets">Wallets</Link>
      </li>
      <li>
        <Link to="/summary">Summary</Link>
      </li>
      <li>
        <Link to="/accounts">Accounts</Link>
      </li>
      <li>
        <Link to="/setting">Setting</Link>
      </li>
    </nav>
  );
};

export default Navbar;
