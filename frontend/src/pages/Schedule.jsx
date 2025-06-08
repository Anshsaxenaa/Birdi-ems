import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ScheduleForm from '../components/ScheduleForm';
import ScheduleTable from '../components/ScheduleTable';
import * as scheduleAPI from '../services/scheduleService';

const Schedules = () => {
  const [schedules, setSchedules] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadSchedules = async () => {
    const res = await scheduleAPI.getAllSchedules();
    setSchedules(res.data);
  };

  const handleAddOrUpdate = async form => {
    if (editing) {
      await scheduleAPI.updateSchedule(editing._id, form);
    } else {
      await scheduleAPI.createSchedule(form);
    }
    loadSchedules();
    setEditing(null);
  };

  const handleDelete = async id => {
    if (window.confirm("Delete this shift schedule?")) {
      await scheduleAPI.deleteSchedule(id);
      loadSchedules();
    }
  };

  useEffect(() => {
    loadSchedules();
  }, []);

  return (
    <div className="ml-64 bg-gray-100 min-h-screen">
      <Header title="Shift Schedule Management" />
      <div className="p-6">
        <ScheduleForm onSubmit={handleAddOrUpdate} editing={editing} onCancel={() => setEditing(null)} />
        <ScheduleTable schedules={schedules} onEdit={setEditing} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Schedules;
