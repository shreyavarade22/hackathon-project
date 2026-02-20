// ComplaintMessagePage.jsx
import React, { useState } from 'react';
import './Message.css';

const Message = () => {
  // State for selected complaint and form fields
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [complaintRef, setComplaintRef] = useState('CMP-042');
  const [subject, setSubject] = useState('Your complaint has been resolved ✅');
  const [messageText, setMessageText] = useState(
    "Dear resident,\n\nWe are happy to inform you that your reported issue has been resolved. The maintenance team has completed the necessary work. Thank you for your patience.\n\nBest regards,\nFacility Management"
  );
  const [toastText, setToastText] = useState('Ready to send resolution update.');
  const [isSending, setIsSending] = useState(false);

  // Sample complaint data
  const complaints = [
    {
      id: 'CMP-042',
      user: 'Alex Rivera',
      email: 'alex.river@example.com',
      status: 'open',
      preview: 'Water leakage in corridor since 3 days. Causing slippery floor.',
    },
    {
      id: 'CMP-039',
      user: 'Jasmine Choi',
      email: 'jasmine.choi@domain.org',
      status: 'in progress',
      preview: 'Street light outside #42 not working for a week. Very dark at night.',
    },
    {
      id: 'CMP-045',
      user: 'Marcus Ng',
      email: 'marcus.ng@mail.com',
      status: 'open',
      preview: 'Garbage not collected from block C for two collections. Smell is terrible.',
    },
  ];

  // Handle complaint selection
  const handleSelectComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setComplaintRef(complaint.id);
    
    // Personalize message with complainant's first name
    const firstName = complaint.user.split(' ')[0];
    const personalizedMessage = `Dear ${firstName},\n\nWe are happy to inform you that your reported issue (${complaint.id}) has been resolved. The maintenance team has completed the necessary work. Thank you for your patience.\n\nBest regards,\nFacility Management`;
    
    setMessageText(personalizedMessage);
    setSubject(`Update regarding ${complaint.id} - resolved`);
    setToastText(`Complainant: ${complaint.user} - email set`);
  };

  // Handle send email
  const handleSendEmail = (e) => {
    e.preventDefault();
    
    if (!selectedComplaint) {
      setToastText('Please select a complaint first (email missing)');
      return;
    }

    setIsSending(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('===== EMAIL SENT (SIMULATION) =====');
      console.log('To:', selectedComplaint.email);
      console.log('Subject:', subject);
      console.log('Body:\n', messageText);
      console.log('====================================');
      
      setToastText(
        <span>
          Message sent to <strong>{selectedComplaint.email}</strong> (complaint {complaintRef})
        </span>
      );
      setIsSending(false);
    }, 500);
  };

  // Handle reset
  const handleReset = () => {
    setSelectedComplaint(null);
    setComplaintRef('CMP-042');
    setSubject('Your complaint has been resolved');
    setMessageText(
      "Dear resident,\n\nWe are happy to inform you that your reported issue has been resolved. The maintenance team has completed the necessary work. Thank you for your patience.\n\nBest regards,\nFacility Management"
    );
    setToastText('Cleared - ready to select a complaint.');
  };

  return (
    <div className="message-page">
      {/* Header deep blue */}
      <div className="page-header">
        <div className="header-title">
          <span>resolve - message center</span>
        </div>
        <div className="header-badge">
          verified complaint handler
        </div>
      </div>

      {/* Main columns */}
      <div className="columns">
        {/* LEFT: complaints list */}
        <div className="complaint-panel">
          <div className="panel-label">
            recent complainants
          </div>

          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className={`complaint-card ${
                selectedComplaint?.id === complaint.id ? 'selected' : ''
              }`}
              onClick={() => handleSelectComplaint(complaint)}
            >
              <div className="complaint-header">
                <span className="complaint-id">{complaint.id}</span>
                <span className={`complaint-status status-${complaint.status.replace(' ', '-')}`}>
                  {complaint.status}
                </span>
              </div>
              <div className="complaint-user">{complaint.user}</div>
              <div className="complaint-email">
                {complaint.email}
              </div>
              <div className="complaint-preview">
                {complaint.preview}
              </div>
            </div>
          ))}

          <div className="panel-hint">
            click any complaint - auto-fills email
          </div>
        </div>

        {/* RIGHT: compose message */}
        <div className="compose-panel">
          <div className="compose-label">
            send resolution update
          </div>

          {/* Email field (read-only display) */}
          <div className="field-group">
            <label>complainant email</label>
            <div className="email-display">
              <span>{selectedComplaint?.email || '- select a complaint -'}</span>
            </div>
          </div>

          {/* Complaint ID */}
          <div className="field-group">
            <label>complaint ID / reference</label>
            <input
              type="text"
              value={complaintRef}
              onChange={(e) => setComplaintRef(e.target.value)}
              placeholder="e.g. CMP-042"
            />
          </div>

          {/* Subject line */}
          <div className="field-group">
            <label>subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject..."
            />
          </div>

          {/* Message body */}
          <div className="field-group">
            <label>message</label>
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Write the resolution details..."
              rows="6"
            />
          </div>

          {/* Helper note */}
          <div className="helper-note">
            <span>
              When you click "send email", a simulated email will go to the complainant's address.
              In a real system, this would trigger an actual email.
            </span>
          </div>

          {/* Action buttons */}
          <div className="action-buttons">
            <button
              className="btn-primary"
              onClick={handleSendEmail}
              disabled={isSending}
            >
              {isSending ? 'sending...' : 'send email'}
            </button>
            <button className="btn-secondary" onClick={handleReset}>
              clear / reset
            </button>
          </div>

          {/* Toast / confirmation message */}
          <div className="toast-message">
            <span>{toastText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

