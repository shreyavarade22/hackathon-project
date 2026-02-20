import React from 'react';
import { Link } from 'react-router-dom';
import './Homepages.css';

const HomePages = () => {
  const complaintCategories = [
    { id: 'water', icon: '🚰', label: 'Water Supply', color: '#00ced1' },
    { id: 'waste', icon: '🗑️', label: 'Waste Management', color: '#fedb5f' },
    { id: 'traffic', icon: '🚦', label: 'Traffic Issues', color: '#f06e6e' },
    { id: 'lighting', icon: '⚡', label: 'Street Lighting', color: '#9fc5b8' },
    { id: 'roads', icon: '🏗️', label: 'Road Maintenance', color: '#b58840' },
    { id: 'noise', icon: '🔊', label: 'Noise Pollution', color: '#85994b' },
  ];

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-container">
            <span className="logo-icon">🏙️</span>
          </div>
          <span className="app-name">CityVoice</span>
        </div>
        <div className="nav-center">
          <Link to="/home" className="nav-link active">Home</Link>
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/issues" className="nav-link">Issues</Link>
          <Link to="/account" className="nav-link">Account</Link>
        </div>
        <div className="nav-right">
          <button className="report-btn">Report Issue</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">Smart Public Complaint & Issue Tracking System</div>
            <h1 className="hero-title">
              Make Your Voice<br />
              <span className="highlight">Heard</span> by the City
            </h1>
            <p className="hero-subtitle">
              Report local issues instantly, track resolution progress, and help build a better community together.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Report an Issue</button>
              <button className="btn-secondary">View Map</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Issues Resolved</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,200+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">48hrs</span>
                <span className="stat-label">Avg. Response Time</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video & Icons */}
          <div className="hero-media">
            <div className="video-wrapper">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="hero-video"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-1145-large.mp4" type="video/mp4" />
              </video>
              <div className="video-overlay">
                <div className="play-button">▶</div>
              </div>
            </div>
            
            {/* Complaint Categories Icons */}
            <div className="categories-grid">
              {complaintCategories.map((category, index) => (
                <div 
                  key={category.id} 
                  className="category-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="category-icon"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.icon}
                  </div>
                  <span className="category-label">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-header">
          <h2 className="section-title">Live Issue Map</h2>
          <p className="section-subtitle">See reported issues in your neighborhood</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
            className="map-iframe"
            title="Live Issue Map"
            loading="lazy"
          />
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
                <Link to="/issues">Issues</Link>
                <Link to="/account">Account</Link>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <Link to="/help">Help Center</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/faq">FAQ</Link>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/sitemap">Site Map</Link>
              </div>
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

