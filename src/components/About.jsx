import React from 'react';

export default function About() {
  return (
    <section className="about-section card">
      <h2 className="section-title">About Me</h2>
      <p className="bio-text">
        Hello! I am <strong>Manav Lathiya</strong>, a passionate Computer Science and Engineering student
        focused on building modern, responsive, and user-centric web applications.
      </p>
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">Role:</span>
          <span className="info-value">Student</span>
        </div>
        <div className="info-item">
          <span className="info-label">Field:</span>
          <span className="info-value">Computer Science & Engineering</span>
        </div>
        <div className="info-item">
          <span className="info-label">Interests:</span>
          <span className="info-value">Web Development, React, UI/UX Design, Cloud Computing</span>
        </div>
        <div className="info-item">
          <span className="info-label">Status:</span>
          <span className="info-value">Active Learner & Open Source Enthusiast</span>
        </div>
      </div>
    </section>
  );
}
