import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Homepages.css";
import Carousel from "react-bootstrap/Carousel";
import Login from "./LoginForm";
import SignupForm from "./SignupForm";
import ComplaintPage from "./ComplaintPage";

function HomePages() {
  const navigate = useNavigate();
  const aboutRef = useRef(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showComplaintPopup, setShowComplaintPopup] = useState(false);
  const [signupRole, setSignupRole] = useState("Receptionist");

  const scrollToAbout = () => {
    navigate("/about-us");
  };

  const handleLoginClick = (role) => {
    setSignupRole(role);
    setShowLoginPopup(true);
  };

  const handleCloseLogin = () => {
    setShowLoginPopup(false);
  };

  const handleSwitchToSignup = () => {
    setShowLoginPopup(false);
    setSignupRole("Receptionist");
    setShowSignupPopup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignupPopup(false);
    setShowLoginPopup(true);
  };

  const handleCloseSignup = () => {
    setShowSignupPopup(false);
  };

  const handleRegisterComplaint = () => {
    setShowComplaintPopup(true);
  };

  const handleCloseComplaint = () => {
    setShowComplaintPopup(false);
  };

  return (
    <div className="home-container">
      {/* Login Popup */}
      {showLoginPopup && (
        <Login 
          isPopup={true} 
          onClose={handleCloseLogin}
          onSwitchToSignup={handleSwitchToSignup}
        />
      )}

      {/* Signup Popup */}
      {showSignupPopup && (
        <SignupForm 
          role={signupRole}
          onClose={handleCloseSignup}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}

      {/* Complaint Popup */}
      {showComplaintPopup && (
        <ComplaintPage 
          isPopup={true}
          onClose={handleCloseComplaint}
        />
      )}

      {/* ===== HEADER ===== */}
      <header className="home-header">
        <div className="home-logo">🏙️ City Voice</div>

        <nav className="home-nav">
          <a href="/" className="nav-link">Home</a>

          <button onClick={scrollToAbout} className="nav-btn">
            About Us
          </button>

          <button className="login-btn admin-btn" onClick={() => handleLoginClick("Admin")}>
            Login Admin
          </button>

          <button className="login-btn officer-btn" onClick={() => handleLoginClick("Officer")}>
            Login Officer
          </button>
        </nav>
      </header>


      {/* ===== HERO + CAROUSEL ===== */}
      <section className="hero-carousel">

        {/* LEFT SIDE TEXT */}
        <div className="hero-content">
          <h1 className="hero-title">
            Raise Your Voice. We Will Resolve It.
          </h1>

          <p className="hero-description">
            Smart Public Complaint & Issue Tracking System allows citizens
            to report civic problems like road damage, water supply issues,
            electricity failure, and sanitation complaints easily.
          </p>

          {/* TWO BUTTONS IN ONE LINE */}
          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleRegisterComplaint}>
              Register Complaint
            </button>

            <button className="secondary-btn">
              Track Complaint
            </button>
          </div>
        </div>


        {/* RIGHT SIDE CAROUSEL */}
        <div className="carousel-section">
          <Carousel fade controls indicators interval={3000}>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://img.freepik.com/free-vector/complaint-concept-illustration_114360-6699.jpg"
                alt="Complaint"
              />
              <Carousel.Caption>
                <h3>Easy Complaint Registration</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://img.freepik.com/free-vector/tracking-location-concept-illustration_114360-7864.jpg"
                alt="Tracking"
              />
              <Carousel.Caption>
                <h3>Real-Time Issue Tracking</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://img.freepik.com/free-vector/happy-people-teamwork_52683-66658.jpg"
                alt="Resolution"
              />
              <Carousel.Caption>
                <h3>Fast & Transparent Resolution</h3>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>

      </section>


      {/* ===== ICON SECTION ===== */}
      <section className="icon-section">

        <div className="icon-card">
          <div className="icon">📝</div>
          <h4>Register Complaint</h4>
          <p>Submit complaints about public services quickly.</p>
        </div>

        <div className="icon-card">
          <div className="icon">📍</div>
          <h4>Track Status</h4>
          <p>Monitor complaint progress in real-time.</p>
        </div>

        <div className="icon-card">
          <div className="icon">✅</div>
          <h4>Resolve Issues</h4>
          <p>Authorities resolve and update complaint status.</p>
        </div>

      </section>


      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section" ref={aboutRef}>
        <h2>About City Voice</h2>
        <p>
          City Voice is a Smart Public Complaint & Issue Tracking System
          designed to connect citizens with local authorities.
        </p>
        <p>
          It ensures transparency, accountability, and faster resolution
          of civic issues in Dhule city.
        </p>
      </section>


      {/* ===== FOOTER ===== */}
      <footer className="home-footer">

        <div className="footer-section">
          <h4>City Voice</h4>
          <p>Dhule, Maharashtra</p>
          <p>Email: support@cityvoice.com</p>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <p>Register Complaint</p>
          <p>Track Complaint</p>
          <p>Admin Dashboard</p>
        </div>

        <div className="footer-section">
          <h4>Dhule City Map</h4>
          <iframe
            title="dhule-map"
            className="footer-map"
            src="https://www.google.com/maps?q=Dhule,Maharashtra&output=embed"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </footer>

    </div>
  );
}

export default HomePages;