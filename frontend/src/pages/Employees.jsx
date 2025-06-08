import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';
import * as empAPI from '../services/employeeService';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const loadEmployees = async () => {
    const res = await empAPI.getAllEmployees();
    setEmployees(res.data);
  };

  const handleAddOrUpdate = async form => {
    if (editingEmployee) {
      await empAPI.updateEmployee(editingEmployee._id, form);
    } else {
      await empAPI.createEmployee(form);
    }
    loadEmployees();
    setEditingEmployee(null);
  };

  const handleDelete = async id => {
    if (window.confirm("Delete this employee?")) {
      await empAPI.deleteEmployee(id);
      loadEmployees();
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="ml-64 bg-gray-100 min-h-screen">
      <Header title="Employee Management" />
      <div className="p-6">
        <EmployeeForm onSubmit={handleAddOrUpdate} editingEmployee={editingEmployee} onCancel={() => setEditingEmployee(null)} />
        <EmployeeTable employees={employees} onEdit={setEditingEmployee} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Employees;
