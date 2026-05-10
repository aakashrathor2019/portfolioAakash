import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyIkano from './pages/CaseStudy/CaseStudyIkano';
import CaseStudyDecathlon from './pages/CaseStudy/CaseStudyDecathlon';
import CaseStudyStockPulse from './pages/CaseStudy/CaseStudyStockPulse';
import CaseStudySmartCart from './pages/CaseStudy/CaseStudySmartCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/ikano-bank" element={<CaseStudyIkano />} />
        <Route path="/projects/decathlon-store" element={<CaseStudyDecathlon />} />
        <Route path="/projects/stockpulse-ai" element={<CaseStudyStockPulse />} />
        <Route path="/projects/smartcart" element={<CaseStudySmartCart />} />
      </Routes>
    </Router>
  );
}

export default App;
