import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('driver');

  const handleLogin = (type) => {
    onLogin(type);
    navigate(`/${type}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>🔋 EV Charger Login</h2>
        
        <div className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="driver@example.com" />
          </div>
          
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="••••••••" />
          </div>
          
          <div className="user-type-toggle">
            <button 
              className={userType === 'driver' ? 'active' : ''}
              onClick={() => setUserType('driver')}
            >
              👤 Driver
            </button>
            <button 
              className={userType === 'owner' ? 'active' : ''}
              onClick={() => setUserType('owner')}
            >
              🏠 Charger Owner
            </button>
          </div>
          
          <button 
            className="login-btn"
            onClick={() => handleLogin(userType)}
          >
            Login as {userType === 'driver' ? 'Driver' : 'Owner'}
          </button>
          
          <p className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;