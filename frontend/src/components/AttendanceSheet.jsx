import React, { useEffect, useState } from 'react';

const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

const AttendanceSheet = ({ employees, attendance, onToggle }) => {
  const today = new Date();
  const [days, setDays] = useState([]);

  useEffect(() => {
    const numDays = getDaysInMonth(today.getMonth() + 1, today.getFullYear());
    const dayArray = Array.from({ length: numDays }, (_, i) => i + 1);
    setDays(dayArray);
  }, []);

  return (
    <div className="overflow-auto">
      <table className="min-w-full border">
        <thead>
          <tr className="bg-green-700 text-white text-sm">
            <th className="p-2 sticky left-0 bg-green-700">Employee</th>
            {days.map(day => (
              <th key={day} className="p-2">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id} className="text-sm border-t text-center">
              <td className="p-2 font-medium sticky left-0 bg-white">{emp.name}</td>
              {days.map(day => {
                const key = `${emp._id}-${day}`;
                const isPresent = attendance[key];
                return (
                  <td key={key}>
                    <input
                      type="checkbox"
                      checked={isPresent || false}
                      onChange={() => onToggle(emp._id, day)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceSheet;
