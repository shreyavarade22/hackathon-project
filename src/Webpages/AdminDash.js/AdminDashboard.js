import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const getActiveMenu = () => {
    const path = location.pathname;
    if (path.includes("complaints")) return "Complaint Management";
    if (path.includes("users")) return "User Management";
    if (path.includes("message")) return "Message Center";
    if (path.includes("departments")) return "Department Management";
    if (path.includes("reports")) return "Reports & Analytics";
    if (path.includes("notifications")) return "Notifications";
    if (path.includes("feedback")) return "Feedback";
    if (path.includes("settings")) return "Settings";
    return "Dashboard";
  };

  const activeMenu = getActiveMenu();

  return (
    <div className="admin-container">

      {/* ===== SIDEBAR ===== */}
      <div className="sidebar">
        <h2 className="logo">🏙️ City Voice</h2>

        <ul>
          <li onClick={() => navigate("/admin-dashboard")} className={activeMenu === "Dashboard" ? "active" : ""}>
            <span className="menu-icon">🏠</span> Dashboard
          </li>
          <li onClick={() => navigate("/admin-dashboard/complaints")} className={activeMenu === "Complaint Management" ? "active" : ""}>
            <span className="menu-icon">📂</span> Complaint Management
          </li>
          <li onClick={() => navigate("/admin-dashboard/users")} className={activeMenu === "User Management" ? "active" : ""}>
            <span className="menu-icon">👥</span> User Management
          </li>
          <li onClick={() => navigate("/admin-dashboard/message")} className={activeMenu === "Message Center" ? "active" : ""}>
            <span className="menu-icon">✉️</span> Message Center
          </li>
          {/* <li onClick={() => navigate("/admin-dashboard/feedback")} className={activeMenu === "Feedback" ? "active" : ""}>
            <span className="menu-icon">📝</span> Feedback
          </li> */}
          <li className="logout" onClick={handleLogout}>
            <span className="menu-icon">🚪</span> Logout
          </li>
        </ul>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-content">

        {/* Top Bar */}
        <div className="topbar">
          <h1>{activeMenu}</h1>
          <div className="admin-profile">
            <span className="profile-icon">👤</span> Admin Panel
          </div>
        </div>

        {/* Dynamic Content - Render nested routes via Outlet */}
        <div className="content-area">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;

