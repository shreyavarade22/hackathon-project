import React from 'react';
import { Link } from 'react-router-dom';
import './Homepages.css';

const HomePages = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="nav-logo">🏙️</span>
          <span className="nav-name">CityVoice</span>
        </div>
        <div className="nav-links">
          <Link to="/home" className="nav-link active">Home</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/login" className="nav-link login-btn">Login</Link>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Public Complaint<br />
            <span className="highlight">& Issue Tracking System</span>
          </h1>
          <p className="hero-subtitle">
            Report local issues instantly, track resolution progress, and help build a better community together.
          </p>
        </div>
        
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hero-video"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-1145-large.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      </section>

      {/* Complaint Categories - 3 Icons */}
      <section className="categories-section">
        <h2 className="section-title">Report Issues Easily</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">🚰</div>
            <h3>Water Supply</h3>
            <p>Report water leaks, supply issues, and drainage problems</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🗑️</div>
            <h3>Waste Management</h3>
            <p>Report illegal dumping, missed collections, and cleanliness issues</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🏗️</div>
            <h3>Road Maintenance</h3>
            <p>Report potholes, damaged roads, and infrastructure issues</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-logo">🏙️</span>
              <span className="footer-name">CityVoice</span>
              <p className="footer-tagline">Smart Public Complaint & Issue Tracking System</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <Link to="/home">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/login">Login</Link>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
          
          {/* Map Section in Footer */}
          <div className="footer-map">
            <h4>Live Issue Map</h4>
            <div className="map-container">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
                className="map-iframe"
                title="Live Issue Map"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 CityVoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePages;

