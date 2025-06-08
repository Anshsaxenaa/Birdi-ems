import React from 'react';

const ScheduleTable = ({ schedules, onEdit, onDelete }) => {
  return (
    <table className="w-full border rounded">
      <thead className="bg-green-700 text-white">
        <tr>
          <th className="p-2">Title</th>
          <th className="p-2">Time In</th>
          <th className="p-2">Time Out</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {schedules.map(schedule => (
          <tr key={schedule._id} className="text-center border-b">
            <td className="p-2">{schedule.title}</td>
            <td className="p-2">{schedule.timeIn}</td>
            <td className="p-2">{schedule.timeOut}</td>
            <td className="p-2">
              <button onClick={() => onEdit(schedule)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => onDelete(schedule._id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
