import React from 'react';
import { useParams } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { type } = useParams();
  
  return (
    <div className="dashboard">
      <h1>{type === 'driver' ? '🚗 Driver' : '🏠 Owner'} Dashboard</h1>
      
      {type === 'driver' ? (
        <div className="dashboard-content">
          <div className="card">
            <h3>Available Chargers</h3>
            <p>Find and book available chargers</p>
          </div>
          <div className="card">
            <h3>My Bookings</h3>
            <p>View your current and past bookings</p>
          </div>
        </div>
      ) : (
        <div className="dashboard-content">
          <div className="card">
            <h3>My Chargers</h3>
            <p>Manage your charging stations</p>
          </div>
          <div className="card">
            <h3>Earnings</h3>
            <p>View your earnings and withdraw</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;