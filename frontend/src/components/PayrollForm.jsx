import React, { useState } from 'react';

const PayrollForm = ({ employee, onSave }) => {
  const [form, setForm] = useState({
    basic: 0,
    house: 0,
    medical: 0,
    transport: 0,
    bonus: 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: parseFloat(value || 0) }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const gross = form.basic + form.house + form.medical + form.transport + form.bonus;
    onSave({ empId: employee._id, ...form, gross });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h3 className="text-lg font-bold mb-4">Payroll for: {employee.name}</h3>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <input type="number" name="basic" placeholder="Basic Salary" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="house" placeholder="House Allowance" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="medical" placeholder="Medical Allowance" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="transport" placeholder="Transport Allowance" onChange={handleChange} className="p-2 border rounded" />
        <input type="number" name="bonus" placeholder="Bonus" onChange={handleChange} className="p-2 border rounded" />
      </div>
      <button type="submit" className="mt-4 bg-green-700 text-white px-4 py-2 rounded">Save Payroll</button>
    </form>
  );
};

export default PayrollForm;
