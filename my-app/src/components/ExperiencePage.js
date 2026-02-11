import React from 'react';

const roles = [
  {
    title: 'Software Developer',
    company: 'Tech Company',
    period: '2022 - Present',
    highlights: [
      'Built and maintained customer-facing React features used daily by internal and external teams.',
      'Improved API response handling and reduced UI load times through client-side optimizations.',
      'Partnered with design and QA to improve release quality and consistency.'
    ]
  },
  {
    title: 'Junior Developer',
    company: 'Startup Studio',
    period: '2020 - 2022',
    highlights: [
      'Implemented reusable components and layout patterns that accelerated feature delivery.',
      'Contributed to backend endpoints and deployment automation.',
      'Supported migration projects and documentation for onboarding new engineers.'
    ]
  }
];

function ExperiencePage() {
  return (
    <section className="page-section">
      <p className="eyebrow">Work Experience</p>
      <h2>Experience</h2>
      <div className="timeline">
        {roles.map((role) => (
          <article className="timeline-item" key={`${role.title}-${role.company}`}>
            <header>
              <h3>{role.title}</h3>
              <p className="meta">
                {role.company} • {role.period}
              </p>
            </header>
            <ul className="stack-list">
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;
