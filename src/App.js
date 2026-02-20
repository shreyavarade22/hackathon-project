import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from './Webpages/Homepages';
import AboutUs from './Webpages/AboutUs';
import Login from './Webpages/LoginForm';
import Signup from './Webpages/SignupForm';
import AdminDashboard from './Webpages/AdminDash.js/AdminDashboard';
import ComplaintManagement from './Webpages/AdminDash.js/ComplaintManagement';
import UserManagement from './Webpages/AdminDash.js/UserManagement';
import Message from './Webpages/AdminDash.js/Message';

// Recent Activity Data
const recentActivities = [
  { id: 1, icon: '✅', title: 'Complaint Resolved', desc: 'Water leakage at Park Avenue', time: '5 min ago', color: '#22c55e' },
  { id: 2, icon: '📝', title: 'New Complaint', desc: 'Road damage reported at Main Street', time: '15 min ago', color: '#3b82f6' },
  { id: 3, icon: '👤', title: 'New User Registered', desc: 'John Doe joined as Citizen', time: '30 min ago', color: '#8b5cf6' },
  { id: 4, icon: '✉️', title: 'Message Sent', desc: 'Resolution update to Jasmine Choi', time: '1 hour ago', color: '#f59e0b' },
  { id: 5, icon: '⚠️', title: 'High Priority Issue', desc: 'Street light not working - Block C', time: '2 hours ago', color: '#ef4444' },
  { id: 6, icon: '👮', title: 'Officer Assigned', desc: 'Rahul assigned to Sanitation dept', time: '3 hours ago', color: '#06b6d4' },
];

// Dashboard Index Component
function DashboardIndex() {
  return (
    <div className="content-section">
      <h2 className="section-title">Dashboard Overview</h2>
      
      {/* Stats Cards */}
      <div className="stats-cards">
        <div className="card">
          <div className="card-icon">📂</div>
          <div className="card-content">
            <h3>120</h3>
            <p>Total Complaints</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">⏳</div>
          <div className="card-content">
            <h3>35</h3>
            <p>Pending</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">✅</div>
          <div className="card-content">
            <h3>70</h3>
            <p>Resolved</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">👮</div>
          <div className="card-content">
            <h3>12</h3>
            <p>Officers</p>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity-section">
        <h3 className="activity-title">
          <span className="activity-icon">🔔</span>
          Recent Activity
        </h3>
        <div className="activity-list">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon-wrap" style={{ backgroundColor: activity.color + '20' }}>
                <span className="activity-emoji">{activity.icon}</span>
              </div>
              <div className="activity-content">
                <h4>{activity.title}</h4>
                <p>{activity.desc}</p>
              </div>
              <div className="activity-time">
                <span>{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<HomePages />} />
        <Route path="/home" element={<HomePages />} />
        
        {/* About Us */}
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Login & Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Admin Dashboard with nested routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<DashboardIndex />} />
          <Route path="complaints" element={<ComplaintManagement />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="message" element={<Message />} />
          <Route path="departments" element={<div className="content-section"><h2 className="section-title">Department Management</h2><p className="coming-soon">Department management features coming soon...</p></div>} />
          <Route path="reports" element={<div className="content-section"><h2 className="section-title">Reports & Analytics</h2><p className="coming-soon">Reports and analytics features coming soon...</p></div>} />
          <Route path="notifications" element={<div className="content-section"><h2 className="section-title">Notifications Panel</h2><p className="coming-soon">Notifications features coming soon...</p></div>} />
          <Route path="feedback" element={<div className="content-section"><h2 className="section-title">Feedback & Reviews</h2><p className="coming-soon">Feedback features coming soon...</p></div>} />
          <Route path="settings" element={<div className="content-section"><h2 className="section-title">System Settings</h2><p className="coming-soon">Settings features coming soon...</p></div>} />
        </Route>
        
        {/* 404 Page - Catch all unmatched routes */}
        <Route path="*" element={<HomePages />} />
      </Routes>
    </div>
  );
}

export default App;

