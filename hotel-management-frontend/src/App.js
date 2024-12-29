import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import MenuManagement from './components/MenuManagement';
import ChefManagement from './components/ChefManagement';
import BranchManagement from './components/BranchManagement';
//import FinancialRecords from './components/FinancialRecords'; // Add FinancialRecords if needed

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Page1 & Page2 Routing */}
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />

        {/* Page1 Components */}
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/chefs" element={<ChefManagement />} />
        {/* <Route path="/financial-records" element={<FinancialRecords />} /> */}

        {/* Branch Management */}
        <Route path="/branches" element={<BranchManagement />} />
      </Routes>
    </Router>
  );
}

export default App;