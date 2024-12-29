import React from "react";
import "./Page1.css";

function Page1() {
  return (
    <div className="page1">
      <header className="page1-header">
        <h1>Page 1</h1>
      </header>
      <div className="page1-container">
        <div className="page1-card">
          <h2>Menu Management</h2>
        </div>
        <div className="page1-card">
          <h2>Chef Management</h2>
        </div>
        <div className="page1-card">
          <h2>Financial Records</h2>
        </div>
      </div>
    </div>
  );
}

export default Page1;