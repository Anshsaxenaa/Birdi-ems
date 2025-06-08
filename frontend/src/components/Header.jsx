import React from 'react';

const Header = ({ title = "Dashboard" }) => {
  return (
    <div className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <span className="text-sm text-gray-600">Welcome, Ansh Saxena</span>
    </div>
  );
};

export default Header;
