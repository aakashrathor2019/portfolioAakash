import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyBilleasy from './pages/CaseStudy/CaseStudyBilleasy';
import CaseStudyJambarApp from './pages/CaseStudy/CaseStudyJambarApp';
import CaseStudyTaskFlow from './pages/CaseStudy/CaseStudyTaskFlow';
import CaseStudyHealthTrack from './pages/CaseStudy/CaseStudyHealthTrack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/billeasy" element={<CaseStudyBilleasy />} />
        <Route path="/projects/jambar-app" element={<CaseStudyJambarApp />} />
        <Route path="/projects/taskflow" element={<CaseStudyTaskFlow />} />
        <Route path="/projects/healthtrack" element={<CaseStudyHealthTrack />} />
      </Routes>
    </Router>
  );
}

export default App;
