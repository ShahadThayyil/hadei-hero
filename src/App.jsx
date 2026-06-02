import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import HadeiHero from './pages/HadeiHero';
import HadeiJoinForm from './pages/HadeiJoinForm'; // Make sure this path is correct
import HadeiContactPage from './pages/HadeiContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* The main landing page */}
        <Route path="/" element={<HadeiHero />} />
        
        {/* The freelancer application form */}
        <Route path="/apply" element={<HadeiJoinForm />} />
        <Route path="/contact" element={<HadeiContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;