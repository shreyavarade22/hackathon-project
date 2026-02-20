import React, { useState, useEffect } from "react";
import "./ComplaintManagement.css";

function ComplaintManagement() {
  const [complaints, setComplaints] = useState([]);

  // Sample complaints data
  useEffect(() => {
    const sampleComplaints = [
      { id: 1, title: "Road Damage", category: "Infrastructure", location: "Main Street", status: "Pending", date: "2024-01-15" },
      { id: 2, title: "Water Leakage", category: "Water Supply", location: "Park Avenue", status: "Resolved", date: "2024-01-14" },
      { id: 3, title: "Street Light Issue", category: "Electricity", location: "Market Road", status: "Pending", date: "2024-01-13" },
      { id: 4, title: "Garbage Not Collected", category: "Sanitation", location: " Colony", status: "In Progress", date: "2024-01-12" },
      { id: 5, title: "Broken Drainage", category: "Infrastructure", location: "School Road", status: "Pending", date: "2024-01-11" },
    ];
    setComplaints(sampleComplaints);
  }, []);

  return (
    <div className="content-section">
      <h2 className="section-title">Complaint Management</h2>
      <div className="table-container">
        <table className="complaint-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>#{complaint.id}</td>
                <td>{complaint.title}</td>
                <td>{complaint.category}</td>
                <td>{complaint.location}</td>
                <td>{complaint.date}</td>
                <td>
                  <span className={`status-badge ${complaint.status.toLowerCase().replace(" ", "-")}`}>
                    {complaint.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplaintManagement;

