import React, { useState, useEffect } from 'react';

const ScheduleForm = ({ onSubmit, editing, onCancel }) => {
  const initial = { title: '', timeIn: '', timeOut: '' };
  const [form, setForm] = useState(initial);

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

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
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">{editing ? 'Edit Schedule' : 'Add Schedule'}</h2>
      <div className="grid grid-cols-3 gap-4">
        <input name="title" value={form.title} onChange={handleChange} required placeholder="Shift Title" className="p-2 border rounded" />
        <input name="timeIn" type="time" value={form.timeIn} onChange={handleChange} required className="p-2 border rounded" />
        <input name="timeOut" type="time" value={form.timeOut} onChange={handleChange} required className="p-2 border rounded" />
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        {editing && <button onClick={onCancel} type="button" className="text-gray-500">Cancel</button>}
        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded">{editing ? 'Update' : 'Add'}</button>
      </div>
    </form>
  );
};

export default ScheduleForm;
