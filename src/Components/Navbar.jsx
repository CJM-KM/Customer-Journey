// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();           // update auth state in parent (App.jsx)
    navigate('/login');   // redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Review System</Link>
      </div>
      <div className="nav-right">
        <Link to="/about">About</Link>
        <Link to="/categories">Categories</Link>
        {username && (
          <span className="username">Hello, {username}</span>
        )}
        <button className="logged-in" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
