// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // 'user' or 'admin'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy login logic
    if (
      (role === 'user' && username === 'mayuri' && password === '1234') ||
      (role === 'admin' && username === 'admin' && password === 'admin')
    ) {
    
      onLogin(role); // Pass role to App.jsx
      navigate(role === 'admin' ? '/admin' : '/');
      // Go to homepage
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>{role === 'admin' ? 'Admin Login' : 'User Login'}</h2>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="role-select">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
