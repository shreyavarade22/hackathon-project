import React from "react";
import "./Homepages.css";

function Homepages() {
  return (
    <div className="homepage">

      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="logo">CivicTrack</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>


      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-left">
          <h1>Smart Public Complaint & Issue Tracking System</h1>
          <p>
            Raise your valuable complaints and track them in real-time.
            We ensure transparency and faster resolution.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Register Complaint</button>
            <button className="secondary-btn">Track Complaint</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="complaint"
          />
        </div>
      </section>


      {/* ===== About Section ===== */}
      <section className="about">
        <h2>About The System</h2>
        <p>
          The Smart Public Complaint & Issue Tracking System allows citizens
          to register complaints related to public services like roads,
          water supply, electricity, sanitation and more.
        </p>
        <p>
          Users can track complaint status, get updates, and receive
          notifications when the issue is resolved.
        </p>
      </section>


      {/* ===== Footer ===== */}
      <footer className="footer">
        <p>© 2026 CivicTrack | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default Homepages;