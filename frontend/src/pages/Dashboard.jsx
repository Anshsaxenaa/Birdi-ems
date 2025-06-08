import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  const cards = [
    { title: 'Schedules', count: 3 },
    { title: 'Departments', count: 5 },
    { title: 'Employees', count: 42 },
    { title: 'Users & Admins', count: 6 }
  ];

  return (
    <div className="ml-64 min-h-screen bg-gray-100">
      <Header title="Dashboard" />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-2xl mt-2 font-bold text-blue-600">{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
