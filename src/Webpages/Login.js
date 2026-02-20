import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Add your login logic here
  };

  return (
    <div className="login-page">
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
          <Link to="/login" className="nav-link active">Login</Link>
        </div>
      </nav>

      {/* Login Form Section */}
      <section className="login-section">
        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>Login to your CityVoice account</p>
            </div>
            
            <form className="login-form" onSubmit={handleSubmit}>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              </div>
              
              <button type="submit" className="login-btn">Login</button>
            </form>
            
            <div className="login-footer">
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
            
            <div className="social-login">
              <p>Or continue with</p>
              <div className="social-buttons">
                <button type="button" className="social-btn google">
                  <span>🔵</span> Google
                </button>
                <button type="button" className="social-btn facebook">
                  <span>🔵</span> Facebook
                </button>
              </div>
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

export default Login;

