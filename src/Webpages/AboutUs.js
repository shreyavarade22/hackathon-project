import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about">

      <div className="hero">
        <h1>
          Smart Complaint Management System
        </h1>
        <p>
          This platform is designed to make complaint handling transparent,
          organized, and easy to use for every user.
        </p>
      </div>

      <div className="info-section">

        <div className="info-card">
          <h3>👤 Easy Login Access</h3>
          <p>
            Users securely log in to access their personalized dashboard
            where all complaint-related information is available.
          </p>
        </div>

        <div className="info-card">
          <h3>📋 Complaint Monitoring</h3>
          <p>
            After submission, complaints move through structured stages:
            Pending → In Process → Resolved.
          </p>
        </div>

        <div className="info-card">
          <h3>🔔 Status Transparency</h3>
          <p>
            Users can clearly view the current progress of their complaint
            without confusion.
          </p>
        </div>

      </div>

      <div className="flow-section">
        <h2>System Workflow</h2>

        <div className="flow-steps">
          <div className="flow-step">
            <span>01</span>
            <p>User Login</p>
          </div>

          <div className="flow-step">
            <span>02</span>
            <p>Complaint Assigned to Department</p>
          </div>

          <div className="flow-step">
            <span>03</span>
            <p>Status Updated by Admin</p>
          </div>

          <div className="flow-step">
            <span>04</span>
            <p>User Views Final Resolution</p>
          </div>
        </div>
      </div>
      <div className="trust-section">
        <div className="trust-box">
          <h3>Why This System Stands Out?</h3>
          <p>
            Our platform ensures transparency, structured workflow,
            and user satisfaction by maintaining clear communication
            between users and administrators.
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;