import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/" className="nav-brand-link">
            <span className="nav-logo">🏙️</span>
            <span className="nav-name">CityVoice</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about-us" className="nav-link active">About Us</Link>
          <Link to="/login" className="nav-link login-btn">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About <span className="highlight">CityVoice</span></h1>
          <p>Empowering citizens to build better communities through transparent issue reporting and tracking.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            CityVoice is a smart public complaint and issue tracking system designed to bridge the gap between citizens and local authorities. 
            We believe that every voice matters, and by providing a simple platform to report local issues, we can work together 
            to create safer, cleaner, and more livable communities.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose CityVoice?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Reporting</h3>
            <p>Report issues with just a few taps using our mobile-friendly platform</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Track Progress</h3>
            <p>Monitor the status of your reported issues in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Response</h3>
            <p>Our system ensures quick action on urgent community issues</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Interactive Map</h3>
            <p>View reported issues in your area on our live map</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Data-Driven</h3>
            <p>Help authorities make better decisions with aggregated issue data</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Stay Updated</h3>
            <p>Get notifications on issue status changes and resolutions</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Issues Reported</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8,500+</span>
            <span className="stat-label">Issues Resolved</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5,000+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24hrs</span>
            <span className="stat-label">Avg Response Time</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <p>Join thousands of citizens who are already helping improve their communities</p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn-primary">Sign Up Now</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
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
          <div className="footer-bottom">
            <p>© 2024 CityVoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

