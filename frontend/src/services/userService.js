import axios from './authService'; // baseURL pre-configured

const API = '/users';

export const getAllUsers = () => axios.get(API);
export const createUser = data => axios.post(API, data);
export const updateUser = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteUser = id => axios.delete(`${API}/${id}`);
