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

function HomePage() {
  const [roleText, setRoleText] = useState(roles[0]);
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/projects_info_cards.json`);
        if (!response.ok) {
          throw new Error(`Failed to load project data: ${response.status}`);
        }

        const projectData = await response.json();
        if (isMounted) {
          setProjects(projectData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadProjects();

    return () => {
      isMounted = false;
    };
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

        <div className="hero-visual hero-visual--lanyard" aria-label="Adrian Johnson lanyard badge">
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
            <article key={project.heading} className="project-card">
              <div className="project-card-media">
                <img
                  className="project-card-image"
                  src={`${process.env.PUBLIC_URL}${project.image}`}
                  alt={project['alt-text']}
                  loading="lazy"
                />
              </div>
              <div className="project-card-content">
                <h3>{project.heading}</h3>
                <p>{project.description}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                ) : (
                  <span className="project-card-status">Coming Soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
