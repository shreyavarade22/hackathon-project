import React from 'react';
import { Link } from 'react-router-dom';
import './Homepages.css';

const HomePages = () => {
  const categories = [
    { id: 1, icon: '💧', title: 'Water Supply', desc: 'Report water leaks & issues', color: '#00d4ff' },
    { id: 2, icon: '🗑️', title: 'Waste Management', desc: 'Report garbage & cleaning', color: '#10b981' },
    { id: 3, icon: '🛣️', title: 'Road Maintenance', desc: 'Report potholes & damage', color: '#f59e0b' },
  ];

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            <div className="logo-box">
              <span className="logo-icon">🏙️</span>
            </div>
            <span className="brand-name">CityVoice</span>
          </Link>
          <div className="nav-menu">
            <Link to="/home" className="nav-link active">Home</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/login" className="nav-btn">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Smart City Solution
            </div>
            <h1 className="hero-title">
              Smart Public Complaint<br />
              <span className="gradient-text">& Issue Tracking</span>
            </h1>
            <p className="hero-desc">
              Empowering citizens to report local issues effortlessly. 
              Connect with your city government and make your voice heard for a better community.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn-primary">
                <span>Report Issue</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about-us" className="btn-secondary">Learn More</Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">15K+</span>
                <span className="stat-label">Issues Resolved</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">8K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">24h</span>
                <span className="stat-label">Avg Response</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="video-card">
              <video autoPlay loop muted playsInline className="hero-video">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-1145-large.mp4" type="video/mp4" />
              </video>
              <div className="video-play-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="floating-cards">
              <div className="float-card card-1">
                <span className="card-icon">✅</span>
                <span className="card-text">Issue Resolved</span>
              </div>
              <div className="float-card card-2">
                <span className="card-icon">📍</span>
                <span className="card-text">New Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="section-header">
          <h2 className="section-title">Report Common Issues</h2>
          <p className="section-subtitle">Quickly report the most common civic problems in your area</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div 
              key={cat.id} 
              className="category-card"
              style={{ '--delay': `${index * 0.1}s`, '--accent': cat.color }}
            >
              <div className="category-icon-wrap" style={{ background: `${cat.color}20` }}>
                <span className="category-icon" style={{ color: cat.color }}>{cat.icon}</span>
              </div>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">{cat.desc}</p>
              <Link to="/login" className="category-link">
                Report Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="map-section">
        <div className="section-header">
          <h2 className="section-title">Live Issue Map</h2>
          <p className="section-subtitle">See reported issues in your neighborhood in real-time</p>
        </div>
        <div className="map-wrapper">
          <div className="map-card">
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
              title="Live Issue Map"
              className="map-iframe"
            />
            <div className="map-overlay">
              <span>🗺️ View Full Map</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo-box">
                <span className="logo-icon">🏙️</span>
              </div>
              <div>
                <span className="brand-name">CityVoice</span>
                <p className="footer-tagline">Smart Public Complaint & Issue Tracking System</p>
              </div>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Navigation</h4>
                <Link to="/home">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/login">Login</Link>
              </div>
              <div className="link-group">
                <h4>Legal</h4>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
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

