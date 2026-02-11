import React from 'react';

function HomePage() {
  return (
    <section className="page-section">
      <p className="eyebrow">Welcome</p>
      <h2>Hi, I&apos;m Ajohn.</h2>
      <p className="lead">
        I build web applications with a focus on clean UI, reliable backend integration,
        and accessible user experiences.
      </p>

      <div className="card-grid">
        <article className="info-card">
          <h3>Frontend</h3>
          <p>React, reusable components, responsive layout systems, and UX polish.</p>
        </article>
        <article className="info-card">
          <h3>Backend</h3>
          <p>API integration, data modeling, and maintainable service architecture.</p>
        </article>
        <article className="info-card">
          <h3>Collaboration</h3>
          <p>Cross-functional delivery, iterative feedback loops, and clear communication.</p>
        </article>
      </div>
    </section>
  );
}

export default HomePage;
