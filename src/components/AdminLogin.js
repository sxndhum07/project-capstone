import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from './Assets/Admin.jpg';
import './Adminlogin.css';



const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "adminpass") {
      console.log('Admin login successful');
      navigate('/admin/Upload');
    } else {
      setError('Invalid credentials');
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <img src={loginImage} alt="Login" />
          <p>Welcome back! Please login to your account.</p>
        </div>
        <div className="login-right">
          <form onSubmit={handleLogin}>
            <h2>Admin Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="input-container">
              <label>Username:</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
            </div>
            <div className="input-container">
              <label>Password:</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
