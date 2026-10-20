import React from 'react';

const skillsList = [
  { name: 'React.js', level: 'Intermediate', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', level: 'Advanced', category: 'Language' },
  { name: 'HTML5 & CSS3', level: 'Advanced', category: 'Frontend' },
  { name: 'React Router v6', level: 'Intermediate', category: 'Routing' },
  { name: 'Vite', level: 'Intermediate', category: 'Tooling' },
  { name: 'Git & GitHub', level: 'Intermediate', category: 'Version Control' },
  { name: 'State Management (useState)', level: 'Intermediate', category: 'React' },
  { name: 'Responsive Design', level: 'Advanced', category: 'UI/UX' },
];

export default function Skills() {
  return (
    <section className="skills-section card">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-badge">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
