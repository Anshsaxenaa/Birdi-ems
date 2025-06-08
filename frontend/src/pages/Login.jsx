import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', rememberMe: false });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', form);
      alert(res.data.message);
      // Navigate to dashboard or store user
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src="/birdi-logo.png" alt="BIRDI EMS" className="w-32 mb-4" />
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-4">Login - Admin Panel</h2>
        <input name="email" onChange={handleChange} value={form.email} type="email" placeholder="Email" required className="w-full mb-3 p-2 border rounded" />
        <input name="password" onChange={handleChange} value={form.password} type="password" placeholder="Password" required className="w-full mb-3 p-2 border rounded" />
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm"><input type="checkbox" name="rememberMe" checked={form.rememberMe} onChange={handleChange} /> Remember me</label>
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
        </div>
        <button type="submit" className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">Login</button>
        <p className="text-sm text-center mt-3">New here? <a href="/register" className="text-blue-600 hover:underline">Register</a></p>
      </form>
    </div>
  );
};

export default Login;
