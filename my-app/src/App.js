import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectPage from './components/ProjectPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </main>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
