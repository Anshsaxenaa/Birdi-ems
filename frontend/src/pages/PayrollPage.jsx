import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PayrollForm from '../components/PayrollForm';
import PayrollTable from '../components/PayrollTable';
import * as payrollAPI from '../services/payrollService';
import * as employeeAPI from '../services/employeeService';

const PayrollPage = () => {
  const today = new Date();
  const [employees, setEmployees] = useState([]);
  const [payrolls, setPayrolls] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [month] = useState(today.getMonth() + 1);
  const [year] = useState(today.getFullYear());

  const loadPayrolls = async () => {
    const res = await payrollAPI.getPayroll(month, year);
    setPayrolls(res.data);
  };

  useEffect(() => {
    const load = async () => {
      const empRes = await employeeAPI.getAllEmployees();
      setEmployees(empRes.data);
      loadPayrolls();
    };
    load();
  }, []);

  const handleSave = async (data) => {
    await payrollAPI.savePayroll({ ...data, month, year });
    setSelectedEmployee(null);
    loadPayrolls();
  };

  return (
    <div className="ml-64 bg-gray-100 min-h-screen p-6">
      <Header title={`Payroll: ${month}/${year}`} />
      <div className="bg-white p-4 rounded mb-4">
        <label className="text-sm font-semibold mr-2">Select Employee:</label>
        <select
          className="border p-2 rounded"
          onChange={(e) => setSelectedEmployee(employees.find(emp => emp._id === e.target.value))}
        >
          <option>Select</option>
          {employees.map(emp => (
            <option key={emp._id} value={emp._id}>{emp.name}</option>
          ))}
        </select>
      </div>
      {selectedEmployee && <PayrollForm employee={selectedEmployee} onSave={handleSave} />}
      <PayrollTable data={payrolls} employees={employees} />
    </div>
  );
};

export default PayrollPage;
