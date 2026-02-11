import React from 'react';

function AboutPage() {
  return (
    <section className="page-section">
      <p className="eyebrow">About</p>
      <h2>About Me</h2>
      <p className="lead">
        I enjoy solving practical product problems and turning ideas into dependable,
        easy-to-use software. My work blends engineering discipline with attention to design.
      </p>

      <article className="info-card">
        <h3>What I Value</h3>
        <ul className="stack-list">
          <li>Readable code and clear architecture.</li>
          <li>Design systems that scale with product growth.</li>
          <li>Shipping quickly without sacrificing quality.</li>
          <li>Continuous learning and mentorship.</li>
        </ul>
      </article>
    </section>
  );
}

export default AboutPage;
