import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // We'll create this next

const Navigation = ({ isLoggedIn, userType, onLogout }) => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <Link to="/">⚡ EV Charger</Link>
      </div>
      
      <div className="nav-links">
        {!isLoggedIn ? (
          // Not logged in
          <>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        ) : (
          // Logged in
          <>
            <Link to={`/${userType}`} className="nav-link">Dashboard</Link>
            {userType === 'driver' && (
              <Link to="/driver/chargers" className="nav-link">Find Chargers</Link>
            )}
            {userType === 'owner' && (
              <Link to="/owner/chargers" className="nav-link">My Chargers</Link>
            )}
            <button onClick={onLogout} className="nav-link logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;