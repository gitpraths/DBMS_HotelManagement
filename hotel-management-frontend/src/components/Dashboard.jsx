import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-container">
        <Link to="/page1" className="card">
          <h2>Alpha</h2>
        </Link>
        <Link to="/page2" className="card">
          <h2>Beta</h2>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;