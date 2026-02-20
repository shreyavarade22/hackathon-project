import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', formData);
  };

  return (
    <div className="auth-page">
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
            <Link to="/about-us" className="nav-link">About Us</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        </div>
      </nav>

      {/* Signup Section */}
      <section className="auth-section">
        <div className="auth-bg"></div>
        
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <div className="auth-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </div>
              <h1>Create Account</h1>
              <p>Join CityVoice and start reporting issues</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <div className="form-terms">
                <label className="checkbox-wrapper">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  <span>I agree to the <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                </label>
              </div>

              <button type="submit" className="auth-btn">
                Create Account
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
              </button>
            </form>

            <p className="auth-footer">
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
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

export default Signup;

