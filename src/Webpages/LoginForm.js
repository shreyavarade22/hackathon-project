import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const Login = ({ isPopup = false, onClose, onSwitchToSignup, role }) => {
  const navigate = useNavigate();
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
    console.log('Login:', formData);
    // Navigate to AdminDashboard after login
    navigate('/admin-dashboard');
  };

  // ================= POPUP VERSION =================
  if (isPopup) {
    return (
      <div className="auth-overlay" onClick={onClose}>
        <div className="auth-popup-card" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close-btn" onClick={onClose}>×</button>
          
          <div className="popup-auth-header">
            <div className="popup-auth-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
            </div>
            <h2>Welcome Back</h2>
            <p>Login to your CityVoice account</p>
          </div>

          <form className="popup-auth-form" onSubmit={handleSubmit}>
            <div className="popup-form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="popup-form-group">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            {/* 🔥 UPDATED BUTTON TEXT HERE */}
            <button type="submit" className="popup-auth-btn">
              Login
            </button>
          </form>

          <div className="popup-auth-footer">
            <p>Don't have an account? <span onClick={onSwitchToSignup}>Sign up</span></p>
          </div>
        </div>
      </div>
    );
  }

  // ================= FULL PAGE VERSION =================
  return (
    <div className="auth-page">
      
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
            <Link to="/login" className="nav-link active">Login</Link>
          </div>
        </div>
      </nav>

      <section className="auth-section">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <div className="auth-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10 17 15 12 10 7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </div>
              <h1>Welcome Back</h1>
              <p>Login to your CityVoice account</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
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
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* FULL PAGE BUTTON ALREADY LOGIN */}
              <button type="submit" className="auth-btn">
                Login
              </button>
            </form>

            <p className="auth-footer">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 CityVoice. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default Login;