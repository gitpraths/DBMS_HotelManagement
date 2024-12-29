import React from "react";
import "./Page2.css";

function Page2() {
  return (
    <div className="page2">
      <header className="page2-header">
        <h1>Page 2</h1>
      </header>
      <div className="page2-container">
        <div className="page2-card">
          <h2>Menu Management</h2>
        </div>
        <div className="page2-card">
          <h2>Chef Management</h2>
        </div>
        <div className="page2-card">
          <h2>Financial Records</h2>
        </div>
      </div>
    </div>
  );
}

export default Page2;