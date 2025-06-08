import React from 'react';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="w-full border rounded">
      <thead className="bg-green-700 text-white">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Department</th>
          <th className="p-2">Designation</th>
          <th className="p-2">Schedule</th>
          <th className="p-2">Date Joined</th>
          <th className="p-2">Salary</th>
          <th className="p-2">Photo</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp._id} className="text-center border-b">
            <td className="p-2">{emp.name}</td>
            <td className="p-2">{emp.department}</td>
            <td className="p-2">{emp.designation}</td>
            <td className="p-2">{emp.schedule}</td>
            <td className="p-2">{emp.dateJoined}</td>
            <td className="p-2">₹{emp.salary}</td>
            <td className="p-2">
              {emp.photo ? <img src={emp.photo} alt="emp" className="h-10 w-10 rounded-full mx-auto" /> : 'N/A'}
            </td>
            <td className="p-2">
              <button onClick={() => onEdit(emp)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => onDelete(emp._id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
