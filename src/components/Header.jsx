import React from 'react';

export default function Header() {
  return (
    <header className="portfolio-header">
      <div className="header-avatar">
        <span className="avatar-initials">ML</span>
      </div>
      <div className="header-info">
        <h1 className="student-name">Manav Lathiya</h1>
        <p className="student-role">Student & Aspiring Frontend Engineer</p>
        <p className="course-tag">ITUE301: Advanced Web Development Frameworks — Practical 2</p>
      </div>
    </header>
  );
}
