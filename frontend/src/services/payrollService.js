import axios from './authService';

const API = '/payroll';

export const getPayroll = (month, year) => axios.get(`${API}?month=${month}&year=${year}`);
export const savePayroll = (data) => axios.post(API, data);
