import React from 'react';

const projects = [
  {
    name: 'Portfolio Platform',
    summary: 'A modern portfolio experience focused on clear storytelling and fast load times.',
    stack: 'React, CSS, Vercel'
  },
  {
    name: 'Task Operations Dashboard',
    summary: 'Internal dashboard for tracking workflows, alerts, and team throughput.',
    stack: 'React, Node.js, REST APIs'
  },
  {
    name: 'Analytics Insights Tool',
    summary: 'Visualization interface for product usage and engagement trends.',
    stack: 'JavaScript, Charting, Data Pipelines'
  }
];

function ProjectPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">Projects</p>
      <h2>Selected Work</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <article className="info-card" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <p className="meta">Stack: {project.stack}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
