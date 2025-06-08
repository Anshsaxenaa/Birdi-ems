import React from 'react';

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table className="w-full mt-4 border rounded">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Phone</th>
          <th className="p-2">Role</th>
          <th className="p-2">Status</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id} className="text-center border-b">
            <td className="p-2">{user.name}</td>
            <td className="p-2">{user.email}</td>
            <td className="p-2">{user.phone}</td>
            <td className="p-2">{user.role}</td>
            <td className="p-2">{user.status}</td>
            <td className="p-2">
              <button onClick={() => onEdit(user)} className="text-blue-500 mr-2">Edit</button>
              <button onClick={() => onDelete(user._id)} className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
