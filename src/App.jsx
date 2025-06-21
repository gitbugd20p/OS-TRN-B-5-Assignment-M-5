import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout.jsx";
import Expenses from "./pages/Expenses";
import Wallets from "./pages/Wallets";
import Summary from "./pages/Summary";
import Accounts from "./pages/Accounts";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/wallets" element={<Wallets />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
