import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, editingUser, onCancel }) => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', role: 'Admin', status: 'Active'
  });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editingUser]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', email: '', phone: '', password: '', role: 'Admin', status: 'Active' });
  };

  return (
    <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold mb-4">{editingUser ? 'Edit User' : 'Add User'}</h3>
      <div className="grid grid-cols-2 gap-4">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="p-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" className="p-2 border rounded" />
        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="p-2 border rounded" />
        {!editingUser && (
          <input name="password" value={form.password} onChange={handleChange} required placeholder="Password" type="password" className="p-2 border rounded" />
        )}
        <select name="role" value={form.role} onChange={handleChange} className="p-2 border rounded">
          <option value="Admin">Admin</option>
          <option value="Staff">Staff</option>
        </select>
        <select name="status" value={form.status} onChange={handleChange} className="p-2 border rounded">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        {editingUser && <button onClick={onCancel} type="button" className="text-gray-600">Cancel</button>}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{editingUser ? 'Update' : 'Add'}</button>
      </div>
    </form>
  );
};

export default UserForm;
