import React, { useState } from "react";
import "./ComplaintPage.css";

function ComplaintPage({ isPopup = false, onClose }) {
  const [selectedPriority, setSelectedPriority] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    title: "",
    category: "",
    description: "",
    location: "",
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    if (onClose) {
      onClose();
    }
  };

  // Reusable form fields component
  const FormFields = () => (
    <>
      {/* Personal Information Section */}
      <div className="form-section">
        <h3>Personal Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name" 
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter 10-digit mobile number" 
              pattern="[0-9]{10}"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email Address *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email" 
              required
            />
          </div>

          <div className="form-group">
            <label>City *</label>
            <select 
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Pune">Pune</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Address *</label>
          <textarea 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your complete address" 
            rows="2"
            required
          ></textarea>
        </div>
      </div>

      {/* Complaint Details Section */}
      <div className="form-section">
        <h3>Complaint Details</h3>
        <div className="form-group">
          <label>Complaint Title *</label>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter complaint title" 
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Category *</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Water">Water Issue</option>
              <option value="Electricity">Electricity Issue</option>
              <option value="Road">Road Damage</option>
              <option value="Garbage">Garbage Issue</option>
              <option value="Sewage">Sewage Problem</option>
              <option value="StreetLight">Street Light Issue</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Priority *</label>
            <div className="priority-options">
              <button
                type="button"
                className={`priority-btn low ${selectedPriority === "Low" ? "active" : ""}`}
                onClick={() => setSelectedPriority("Low")}
              >
                Low
              </button>

              <button
                type="button"
                className={`priority-btn medium ${selectedPriority === "Medium" ? "active" : ""}`}
                onClick={() => setSelectedPriority("Medium")}
              >
                Medium
              </button>

              <button
                type="button"
                className={`priority-btn high ${selectedPriority === "High" ? "active" : ""}`}
                onClick={() => setSelectedPriority("High")}
              >
                High
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe the issue in detail..." 
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Problem Location *</label>
          <input 
            type="text" 
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter the exact location of the problem" 
            required
          />
        </div>

        <div className="form-group">
          <label>Upload Image (Optional)</label>
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileChange}
          />
          <small className="help-text">Upload a photo of the issue (max 5MB)</small>
        </div>
      </div>
    </>
  );

  // Popup wrapper
  if (isPopup) {
    return (
      <div className="complaint-overlay" onClick={onClose}>
        <div className="complaint-popup-card" onClick={(e) => e.stopPropagation()}>
          <button className="complaint-close-btn" onClick={onClose}>×</button>
          <h2>Register New Complaint</h2>
          
          <form className="complaint-form" onSubmit={handleSubmit}>
            <FormFields />
            <button type="submit" className="submit-btn">
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Full page version
  return (
    <div className="complaint-container">
      <div className="complaint-card">
        <h2>Register New Complaint</h2>
        
        <form className="complaint-form" onSubmit={handleSubmit}>
          <FormFields />
          <button type="submit" className="submit-btn">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComplaintPage;