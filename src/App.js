import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('driver');

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('driver');
  };

  return (
    <Router>
      <div className="App">
        <Navigation 
          isLoggedIn={isLoggedIn}
          userType={userType}
          onLogout={handleLogout}
        />
        
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={
            !isLoggedIn ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to={`/${userType}`} />
            )
          } />
          
          <Route path="/register" element={
            !isLoggedIn ? <Register /> : <Navigate to={`/${userType}`} />
          } />
          
          {/* Protected Routes */}
          <Route path="/driver" element={
            isLoggedIn && userType === 'driver' ? (
              <Dashboard type="driver" />
            ) : (
              <Navigate to="/login" />
            )
          } />
          
          <Route path="/owner" element={
            isLoggedIn && userType === 'owner' ? (
              <Dashboard type="owner" />
            ) : (
              <Navigate to="/login" />
            )
          } />
          
          {/* Home Route */}
          <Route path="/" element={
            <div className="home">
              <h1>⚡ Welcome to EV Charger Network</h1>
              <p>Book EV chargers instantly with crypto payments</p>
              {!isLoggedIn ? (
                <div className="home-buttons">
                  <a href="/login" className="btn">Login</a>
                  <a href="/register" className="btn secondary">Register</a>
                </div>
              ) : (
                <a href={`/${userType}`} className="btn">
                  Go to {userType === 'driver' ? 'Driver' : 'Owner'} Dashboard
                </a>
              )}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;