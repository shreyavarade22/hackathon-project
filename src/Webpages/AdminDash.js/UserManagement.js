import React, { useState } from "react";
import "./UserManagement.css";

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "Shreya Varade", email: "shreya@gmail.com", role: "Citizen", status: "Active", phone: "+91 9876543210" },
    { id: 2, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Officer", status: "Active", phone: "+91 9876543211" },
    { id: 3, name: "Admin User", email: "admin@gmail.com", role: "Admin", status: "Active", phone: "+91 9876543212" },
    { id: 4, name: "Priya Patel", email: "priya@gmail.com", role: "Citizen", status: "Active", phone: "+91 9876543213" },
    { id: 5, name: "Amit Kumar", email: "amit@gmail.com", role: "Officer", status: "Blocked", phone: "+91 9876543214" },
    { id: 6, name: "Sneha Gupta", email: "sneha@gmail.com", role: "Citizen", status: "Active", phone: "+91 9876543215" },
    { id: 7, name: "Vikram Singh", email: "vikram@gmail.com", role: "Officer", status: "Active", phone: "+91 9876543216" },
    { id: 8, name: "Anjali Desai", email: "anjali@gmail.com", role: "Citizen", status: "Blocked", phone: "+91 9876543217" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Citizen"
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (!formData.name || !formData.email) return alert("Please fill all required fields");

    const newUser = {
      id: users.length + 1,
      ...formData,
      status: "Active"
    };

    setUsers([...users, newUser]);
    setFormData({ name: "", email: "", phone: "", role: "Citizen" });
  };

  const toggleStatus = (id) => {
    const updated = users.map((user) =>
      user.id === id
        ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
        : user
    );
    setUsers(updated);
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const filtered = users.filter((user) => user.id !== id);
      setUsers(filtered);
    }
  };

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "Active").length;
  const blockedUsers = users.filter((u) => u.status === "Blocked").length;
  const citizens = users.filter((u) => u.role === "Citizen").length;
  const officers = users.filter((u) => u.role === "Officer").length;

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleIcon = (role) => {
    switch (role) {
      case "Admin": return "👑";
      case "Officer": return "👮";
      default: return "👤";
    }
  };

  return (
    <div className="user-management">
      <div className="um-header">
        <h2>User Management</h2>
        <div className="um-search">
          <input
            type="text"
            placeholder="🔍 Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="cards">
        <div className="card stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>{totalUsers}</h3>
            <p>Total Users</p>
          </div>
        </div>
        <div className="card stat-card green">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>{activeUsers}</h3>
            <p>Active Users</p>
          </div>
        </div>
        <div className="card stat-card red">
          <div className="stat-icon">⛔</div>
          <div className="stat-info">
            <h3>{blockedUsers}</h3>
            <p>Blocked Users</p>
          </div>
        </div>
        <div className="card stat-card purple">
          <div className="stat-icon">👮</div>
          <div className="stat-info">
            <h3>{officers}</h3>
            <p>Officers</p>
          </div>
        </div>
        <div className="card stat-card blue">
          <div className="stat-icon">👤</div>
          <div className="stat-info">
            <h3>{citizens}</h3>
            <p>Citizens</p>
          </div>
        </div>
      </div>

      {/* Add User Form */}
      <div className="form-card">
        <h3>Add New User</h3>
        <div className="form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Citizen">Citizen</option>
            <option value="Officer">Officer</option>
            <option value="Admin">Admin</option>
          </select>
          <button onClick={addUser} className="add-btn">
            ➕ Add User
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td><span className="user-id">#{user.id}</span></td>
                  <td>
                    <div className="user-cell">
                      <span className="user-avatar">{getRoleIcon(user.role)}</span>
                      <span className="user-name">{user.name}</span>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <span className={`role-badge role-${user.role.toLowerCase()}`}>
                      {getRoleIcon(user.role)} {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status === "Active" ? "✓" : "✕"} {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        onClick={() => toggleStatus(user.id)}
                        className={user.status === "Active" ? "block-btn" : "activate-btn"}
                      >
                        {user.status === "Active" ? "Block" : "Activate"}
                      </button>
                      <button onClick={() => deleteUser(user.id)} className="delete-btn">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;

