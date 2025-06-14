import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Dashboard = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className="dashboard-container">
      <div className={`dashboard-card ${dark ? "dark" : ""}`}>
        <h1 className="dashboard-title">Welcome to the Admin Dashboard</h1>
        <p className="dashboard-description">This is your main overview screen.</p>
      </div>
    </div>
  );
};

export default Dashboard;
