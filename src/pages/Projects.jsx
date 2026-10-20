import React from 'react';

const studentProjects = [
  {
    id: 1,
    title: 'Student Portfolio with Routing & State',
    category: 'React & Vite',
    description:
      'A multi-page portfolio application implementing client-side routing with React Router v6, controlled form state, character counting, and a dynamic dark/light theme switch.',
    technologies: ['React', 'React Router v6', 'useState', 'Vite', 'CSS3'],
    linkText: 'Current Practical',
  },
  {
    id: 2,
    title: 'Smart Task & Study Planner',
    category: 'Web Application',
    description:
      'An interactive task manager helping students organize academic deadlines, prioritize homework, and track progress using local storage persistence.',
    technologies: ['JavaScript', 'HTML5', 'CSS Modules', 'Web Storage API'],
    linkText: 'Demo Project',
  },
  {
    id: 3,
    title: 'Interactive Campus Event Directory',
    category: 'Frontend Project',
    description:
      'A dynamic event catalogue with real-time category filtering, search suggestions, and registration dialogs built with modern ES6+ concepts.',
    technologies: ['React', 'Custom Hooks', 'Flexbox/Grid', 'Responsive Design'],
    linkText: 'Demo Project',
  },
  {
    id: 4,
    title: 'Weather Dashboard & Forecast',
    category: 'API Integration',
    description:
      'A weather client displaying current weather metrics, 5-day forecasts, and temperature unit conversions with clean asynchronous data handling.',
    technologies: ['JavaScript', 'Fetch API', 'CSS Grid', 'JSON'],
    linkText: 'Demo Project',
  },
];

export default function Projects() {
  return (
    <div className="page projects-page">
      <div className="page-header">
        <h1 className="page-title">Featured Projects</h1>
        <p className="page-subtitle">
          Showcasing student projects built with React, modern JavaScript, and responsive design.
          Rendered dynamically using an array and <code>.map()</code>.
        </p>
      </div>

      <div className="projects-grid">
        {studentProjects.map((project) => (
          <div key={project.id} className="project-card card">
            <div className="project-header">
              <span className="project-category">{project.category}</span>
              <span className="project-id-badge">#{project.id}</span>
            </div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-footer">
              <span className="project-status">✔ Completed</span>
              <span className="project-link-placeholder">{project.linkText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
