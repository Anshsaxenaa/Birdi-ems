import axios from './authService'; // axios instance with baseURL

const API = '/employees';

export const getAllEmployees = () => axios.get(API);
export const createEmployee = data => axios.post(API, data);
export const updateEmployee = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteEmployee = id => axios.delete(`${API}/${id}`);
