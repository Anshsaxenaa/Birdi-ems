import axios from './authService';

const API = '/attendance';

export const getMonthlyAttendance = (month, year) => axios.get(`${API}?month=${month}&year=${year}`);
export const markAttendance = (data) => axios.post(`${API}`, data);
