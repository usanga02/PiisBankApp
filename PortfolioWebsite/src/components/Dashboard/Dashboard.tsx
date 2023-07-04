import React from "react";
import Cards from "../Cards/Cards";
import MainDash from "../MainDash/MainDash";
import Sidebar from "../Siderbar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Appp">
      <div className="AppGlass">
      <Sidebar />
      <MainDash />
      {/* <Cards /> */}
    </div>
      </div>
  );
};

export default Dashboard;