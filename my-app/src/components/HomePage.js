import React, { useEffect, useState } from 'react';
import './HomePage.css';
import LanyardCard from './LanyardCard';

const stats = [
  { value: '5+', label: 'Years Exp.' },
  { value: '40+', label: 'Projects Done' },
  { value: '12', label: 'Global Awards' },
];

const navItems = ['Work', 'Experience', 'About', 'Contact'];
const roles = ['Software Engineer', 'Game Developer', 'UX Designer'];
const projects = [
  {
    title: 'Nexus Wallet',
    description: 'A streamlined fintech experience focused on making portfolio management, payments, and wallet insights easier to understand.',
    tags: ['Product', 'Fintech'],
    mediaClass: 'project-card-media--analytics',
  },
  {
    title: 'Velvet Luxe',
    description: 'A polished commerce concept for premium retail experiences with a strong focus on conversion, clarity, and visual storytelling.',
    tags: ['E-Commerce', 'Mobile'],
    mediaClass: 'project-card-media--frame',
  },
  {
    title: 'DataFlow AI',
    description: 'A dashboard concept that turns dense operational data into useful, readable workflows for product and business teams.',
    tags: ['SaaS', 'B2B'],
    mediaClass: 'project-card-media--platform',
  },
];

function HomePage() {
  const [roleText, setRoleText] = useState(roles[0]);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;
    let timeoutId;

    const tick = () => {
      const current = roles[roleIndex];

      if (deleting) {
        charIndex -= 1;
        setRoleText(current.slice(0, Math.max(charIndex, 0)));

        if (charIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeoutId = setTimeout(tick, 300);
          return;
        }

        timeoutId = setTimeout(tick, 55);
        return;
      }

      const nextRole = roles[roleIndex];
      charIndex += 1;
      setRoleText(nextRole.slice(0, charIndex));

      if (charIndex >= nextRole.length) {
        deleting = true;
        timeoutId = setTimeout(tick, 1400);
        return;
      }

      timeoutId = setTimeout(tick, 90);
    };

    timeoutId = setTimeout(tick, 1200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className="home-page">
      <header className="hero-header">
        <div className="brand-mark" aria-label="Adrian Johnson brand">
          <span className="brand-icon">AJ</span>
          <span className="brand-text">
            Adrian <em>Johnson.</em>
          </span>
        </div>

        <nav className="hero-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="hire-button" href="mailto:acbjohnson2002@gmail.com">
          Hire Me
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <h1>
            Hello, I’m Adrian, a
            <span className="typewriter-role" aria-live="polite">
              <span className="typewriter-role-text">{roleText}</span>
            </span>
          </h1>
          <p>
            I’m a computer science student and builder focused on creating clean,
            usable products that connect strong engineering with intuitive user
            experience.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#work">
              View My Work
            </a>
            <a className="secondary-action" href="mailto:acbjohnson2002@gmail.com">
              Contact Me
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

        <div className="hero-visual" aria-label="Adrian Johnson lanyard badge">
          <LanyardCard />
        </div>
      </section>

      <section className="featured-projects" id="work" aria-labelledby="featured-projects-heading">
        <div className="section-heading-row">
          <h2 id="featured-projects-heading">
            Featured <span>Projects</span>
          </h2>
          <a className="section-link" href="#contact">
            Explore all case studies
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className={`project-card-media ${project.mediaClass}`}></div>
              <div className="project-card-content">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#contact">Case Study</a>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default HomePage;
