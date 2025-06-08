import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSubmit, editingEmployee, onCancel }) => {
  const initial = {
    name: '', dob: '', gender: '', email: '', phone: '', address: '',
    department: '', designation: '', schedule: '', dateJoined: '',
    photo: '', salary: 0, allowances: 0, deductions: 0
  };

  const [form, setForm] = useState(initial);

  useEffect(() => {
    if (editingEmployee) setForm(editingEmployee);
  }, [editingEmployee]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm(initial);
  };

  return (
    <form className="bg-white p-4 shadow rounded mb-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">{editingEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
      <div className="grid grid-cols-3 gap-4">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="p-2 border rounded" />
        <input name="dob" type="date" value={form.dob} onChange={handleChange} className="p-2 border rounded" />
        <select name="gender" value={form.gender} onChange={handleChange} className="p-2 border rounded">
          <option value="">Gender</option><option>Male</option><option>Female</option>
        </select>
        <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" className="p-2 border rounded" />
        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="p-2 border rounded" />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="p-2 border rounded" />
        <input name="department" value={form.department} onChange={handleChange} placeholder="Department" className="p-2 border rounded" />
        <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" className="p-2 border rounded" />
        <input name="schedule" value={form.schedule} onChange={handleChange} placeholder="Schedule" className="p-2 border rounded" />
        <input name="dateJoined" type="date" value={form.dateJoined} onChange={handleChange} className="p-2 border rounded" />
        <input name="salary" type="number" value={form.salary} onChange={handleChange} placeholder="Basic Salary" className="p-2 border rounded" />
        <input name="allowances" type="number" value={form.allowances} onChange={handleChange} placeholder="Allowances" className="p-2 border rounded" />
        <input name="deductions" type="number" value={form.deductions} onChange={handleChange} placeholder="Deductions" className="p-2 border rounded" />
        <input name="photo" value={form.photo} onChange={handleChange} placeholder="Photo URL" className="p-2 border rounded col-span-3" />
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        {editingEmployee && <button onClick={onCancel} type="button" className="text-gray-600">Cancel</button>}
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">{editingEmployee ? 'Update' : 'Add'}</button>
      </div>
    </form>
  );
};

export default EmployeeForm;
