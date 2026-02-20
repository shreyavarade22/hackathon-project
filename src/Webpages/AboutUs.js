import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    { icon: '📱', title: 'Easy Reporting', desc: 'Report issues with photos and location in seconds' },
    { icon: '📍', title: 'Track Progress', desc: 'Monitor status of your reports in real-time' },
    { icon: '⚡', title: 'Fast Response', desc: 'Get quick action on urgent civic issues' },
    { icon: '🗺️', title: 'Interactive Map', desc: 'View all reported issues in your area' },
    { icon: '📊', title: 'Data-Driven', desc: 'Help authorities make better decisions' },
    { icon: '🔔', title: 'Stay Updated', desc: 'Get notifications on issue resolutions' },
  ];

  const stats = [
    { num: '15K+', label: 'Issues Reported' },
    { num: '12K+', label: 'Issues Resolved' },
    { num: '8K+', label: 'Active Users' },
    { num: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="about-page">
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
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link active">About Us</Link>
            <Link to="/login" className="nav-btn">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="about-hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            About <span className="gradient-text">CityVoice</span>
          </h1>
          <p className="hero-desc">
            We're on a mission to bridge the gap between citizens and local authorities, 
            making it easier to report and resolve civic issues for a better community.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h2>Our Mission</h2>
            <p>
              CityVoice is a smart public complaint and issue tracking system designed to empower citizens. 
              We believe every voice matters, and by providing a simple platform to report local issues, 
              we can work together to create safer, cleaner, and more livable communities. Our platform 
              enables transparent communication between residents and local authorities, ensuring that 
              civic issues are addressed promptly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose CityVoice?</h2>
            <p>Powerful features to make civic reporting effortless</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Make a Difference?</h2>
            <p>Join thousands of citizens who are already helping improve their communities</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn-primary">Get Started Free</Link>
              <Link to="/login" className="btn-secondary">Login</Link>
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

export default AboutUs;

