import React from 'react';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Manav Lathiya. All rights reserved.</p>
        <p className="footer-subtext">ITUE301: AWDF Practical 2 — State Management and Routing in React</p>
      </div>
    </footer>
  );
}
