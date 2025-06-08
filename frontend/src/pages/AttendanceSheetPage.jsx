import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AttendanceSheet from '../components/AttendanceSheet';
import * as attendanceAPI from '../services/attendanceService';
import * as employeeAPI from '../services/employeeService';

const AttendanceSheetPage = () => {
  const today = new Date();
  const [employees, setEmployees] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [month] = useState(today.getMonth() + 1);
  const [year] = useState(today.getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      const empRes = await employeeAPI.getAllEmployees();
      setEmployees(empRes.data);

      const attRes = await attendanceAPI.getMonthlyAttendance(month, year);
      const formatted = {};
      attRes.data.forEach(entry => {
        formatted[`${entry.empId}-${entry.day}`] = entry.present;
      });
      setAttendanceData(formatted);
    };
    fetchData();
  }, [month, year]);

  const toggleAttendance = async (empId, day) => {
    const key = `${empId}-${day}`;
    const newStatus = !attendanceData[key];
    await attendanceAPI.markAttendance({ empId, day, month, year, present: newStatus });

    setAttendanceData(prev => ({ ...prev, [key]: newStatus }));
  };

  return (
    <div className="ml-64 bg-gray-100 min-h-screen p-6">
      <Header title={`Attendance Sheet: ${month}/${year}`} />
      <AttendanceSheet employees={employees} attendance={attendanceData} onToggle={toggleAttendance} />
    </div>
  );
};

export default AttendanceSheetPage;
