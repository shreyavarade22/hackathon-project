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
    console.log('Signup data:', formData);
    // Add your signup logic here
  };

  return (
    <div className="signup-page">
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
          <Link to="/about-us" className="nav-link">About Us</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
      </nav>

      {/* Signup Form Section */}
      <section className="signup-section">
        <div className="signup-container">
          <div className="signup-card">
            <div className="signup-header">
              <h1>Create Account</h1>
              <p>Join CityVoice and start reporting issues</p>
            </div>
            
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
              
              <div className="form-terms">
                <label className="terms-checkbox">
                  <input type="checkbox" required />
                  <span>I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                </label>
              </div>
              
              <button type="submit" className="signup-btn">Create Account</button>
            </form>
            
            <div className="signup-footer">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
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
          <div className="footer-bottom">
            <p>© 2024 CityVoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;

