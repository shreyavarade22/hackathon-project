import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleLogout = () => {
    navigate("/");
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <div className="content-section">
            <h2>Dashboard Overview</h2>
            <div className="stats-cards">
              <div className="card">Total Complaints: 120</div>
              <div className="card">Pending: 35</div>
              <div className="card">Resolved: 70</div>
              <div className="card">Officers: 12</div>
            </div>
          </div>
        );

      case "All Complaints":
        return <h2>All Complaints List</h2>;

      case "User Management":
        return <h2>User Management Section</h2>;

      case "Department Management":
        return <h2>Department Management Section</h2>;

      case "Reports":
        return <h2>Reports & Analytics</h2>;

      case "Notifications":
        return <h2>Notifications Panel</h2>;

      case "Feedback":
        return <h2>Feedback & Reviews</h2>;

      case "Settings":
        return <h2>System Settings</h2>;

      default:
        return <h2>Welcome Admin</h2>;
    }
  };

  return (
    <div className="admin-container">

      {/* ===== SIDEBAR ===== */}
      <div className="sidebar">
        <h2 className="logo">🏙️ City Voice</h2>

        <ul>
          <li onClick={() => setActiveMenu("Dashboard")}>🏠 Dashboard</li>
          <li onClick={() => setActiveMenu("All Complaints")}>📂 Complaint Management</li>
          <li onClick={() => setActiveMenu("User Management")}>👥 User Management</li>
          <li onClick={() => setActiveMenu("Department Management")}>🏢 Department Management</li>
          <li onClick={() => setActiveMenu("Reports")}>📊 Reports & Analytics</li>
          <li onClick={() => setActiveMenu("Notifications")}>🔔 Notifications</li>
          <li onClick={() => setActiveMenu("Feedback")}>📝 Feedback</li>
          <li onClick={() => setActiveMenu("Settings")}>⚙ Settings</li>
          <li className="logout" onClick={handleLogout}>🚪 Logout</li>
        </ul>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">

        {/* Top Bar */}
        <div className="topbar">
          <h1>{activeMenu}</h1>
          <div className="admin-profile">Admin Panel</div>
        </div>

        {/* Dynamic Content */}
        <div className="content-area">
          {renderContent()}
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;