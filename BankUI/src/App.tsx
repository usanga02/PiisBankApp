import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Transfer from "./components/Transfer/Transfer";
import History from "./components/History/History";
import ListAccounts from "./components/ListAccounts/ListAccounts";
import NewAccount from "./components/NewAccount/NewAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/history" element={<History />} />
        <Route path="/createAccount" element={<NewAccount />} />
        <Route path="/listAccounts" element={<ListAccounts />} />
      </Routes>
    </Router>
  );
}

export default App;
