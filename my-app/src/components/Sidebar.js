import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Work Experience' },
  { to: '/projects', label: 'Projects' }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <h1>Ajohn Portfolio</h1>
        <p>Software Developer</p>
      </div>

      <nav aria-label="Main navigation">
        <ul className="sidebar__nav-list">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
