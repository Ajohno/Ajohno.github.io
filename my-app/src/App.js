// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar'; 
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
        <Sidebar/>
        <div className="content">
        <BrowserRouter basename="ajohno.github.io">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/credits" element={<CreditPage />} />
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Router>
  );
}

export default App;
