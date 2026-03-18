import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectPage from './components/ProjectPage';
import CreditPage from './components/CreditPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/credits" element={<CreditPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
