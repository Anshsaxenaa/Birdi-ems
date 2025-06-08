import axios from './authService';

const API = '/schedules';

export const getAllSchedules = () => axios.get(API);
export const createSchedule = data => axios.post(API, data);
export const updateSchedule = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteSchedule = id => axios.delete(`${API}/${id}`);
