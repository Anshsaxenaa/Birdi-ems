import React from 'react';

const PayrollTable = ({ data, employees }) => {
  const getName = id => {
    const emp = employees.find(e => e._id === id);
    return emp?.name || 'Unknown';
  };

  return (
    <table className="w-full border mt-4">
      <thead className="bg-green-700 text-white text-sm">
        <tr>
          <th className="p-2">Employee</th>
          <th className="p-2">Basic</th>
          <th className="p-2">House</th>
          <th className="p-2">Medical</th>
          <th className="p-2">Transport</th>
          <th className="p-2">Bonus</th>
          <th className="p-2">Gross</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row._id} className="text-sm text-center border-b">
            <td className="p-2">{getName(row.empId)}</td>
            <td className="p-2">{row.basic}</td>
            <td className="p-2">{row.house}</td>
            <td className="p-2">{row.medical}</td>
            <td className="p-2">{row.transport}</td>
            <td className="p-2">{row.bonus}</td>
            <td className="p-2 font-bold">{row.gross}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayrollTable;
