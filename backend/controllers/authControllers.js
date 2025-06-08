const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Register
exports.register = async (req, res) => {
  const { name, email, password, phone, role } = req.body;
  try {
    const user = await User.create({ name, email, password, phone, role });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'User already exists or invalid data' });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password, rememberMe } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = generateToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000 // 7 days vs 1 day
    });

    res.json({ message: 'Login successful', user: { name: user.name, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// Forgot Password (simulated)
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  // Simulate sending reset token (in real app you'd use email)
  const token = generateToken(user);
  console.log(`Reset Link: http://localhost:3000/reset-password/${token}`);
  res.json({ message: 'Password reset link sent (check console)' });
};
