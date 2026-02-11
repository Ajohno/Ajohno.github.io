import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectPage from './components/ProjectPage';
import CreditPage from './components/CreditPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/credits" element={<CreditPage />} />
          </Routes>
        </div>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
