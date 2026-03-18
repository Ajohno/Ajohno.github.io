import React from 'react';
import './HomePage.css';

const stats = [
  { value: '5+', label: 'Years Exp.' },
  { value: '40+', label: 'Projects Done' },
  { value: '12', label: 'Global Awards' },
];

const navItems = ['Work', 'Experience', 'About', 'Contact'];

function HomePage() {
  return (
    <main className="home-page">
      <header className="hero-header">
        <div className="brand-mark" aria-label="Jordan Doe brand">
          <span className="brand-icon">JD</span>
          <span className="brand-text">
            Jordan <em>Doe.</em>
          </span>
        </div>

        <nav className="hero-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="hire-button" href="mailto:jordan@example.com">
          Hire Me
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="availability-pill">Available for new projects</div>
          <h1>
            Hello, I’m Jordan, a <span>UX Designer</span>
            <br />
            building digital experiences.
          </h1>
          <p>
            I specialize in creating human-centric interfaces that bridge the gap
            between complex functionality and intuitive user interactions.
            Currently crafting products at FutureLabs.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#work">
              View My Work
            </a>
            <a className="secondary-action" href="/resume.pdf">
              Download CV
            </a>
          </div>

          <div className="hero-stats" aria-label="Career highlights">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="lanyard"></div>
          <div className="id-card">
            <div className="card-notch"></div>
            <div className="portrait-frame">
              <div className="portrait-head"></div>
              <div className="portrait-face"></div>
              <div className="portrait-shirt"></div>
            </div>
            <div className="id-copy">
              <h2>Jordan Doe</h2>
              <p>Lead UX Designer</p>
            </div>
            <div className="barcode-row">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="verified-badge">Industry Verified · Top 1% Talent</div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
