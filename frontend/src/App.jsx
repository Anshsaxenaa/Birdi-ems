import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

import Users from './pages/Users';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import Payroll from './pages/Payroll';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Panel Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/payroll" element={<Payroll />} />
      </Routes>
    </Router>
  );
}

export default App;
