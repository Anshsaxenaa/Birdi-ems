import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Users Management', path: '/users' },
    { name: 'Employee Management', path: '/employees' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Payroll', path: '/payroll' }
  ];

  return (
    <div className="w-64 h-screen bg-blue-800 text-white fixed top-0 left-0 flex flex-col">
      <div className="text-2xl font-bold text-center py-5 border-b border-blue-700">
        BIRDI EMS
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block p-2 rounded hover:bg-blue-700 ${isActive ? 'bg-blue-700' : ''}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
