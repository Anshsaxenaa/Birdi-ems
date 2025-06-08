import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import UserTable from '../components/userTable';
import UserForm from '../components/UserForm';
import * as userAPI from '../services/userService';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const loadUsers = async () => {
    const res = await userAPI.getAllUsers();
    setUsers(res.data);
  };

  const handleAddOrUpdate = async (form) => {
    if (editingUser) {
      await userAPI.updateUser(editingUser._id, form);
    } else {
      await userAPI.createUser(form);
    }
    loadUsers();
    setEditingUser(null);
  };

  const handleDelete = async id => {
    if (window.confirm("Are you sure?")) {
      await userAPI.deleteUser(id);
      loadUsers();
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="ml-64 bg-gray-100 min-h-screen">
      <Header title="User Management" />
      <div className="p-6">
        <UserForm onSubmit={handleAddOrUpdate} editingUser={editingUser} onCancel={() => setEditingUser(null)} />
        <UserTable users={users} onEdit={setEditingUser} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Users;
