import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import HadeiHero from './pages/HadeiHero';
import HadeiJoinForm from './pages/HadeiJoinForm'; // Make sure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        {/* The main landing page */}
        <Route path="/" element={<HadeiHero />} />
        
        {/* The freelancer application form */}
        <Route path="/apply" element={<HadeiJoinForm />} />
      </Routes>
    </Router>
  );
}

export default App;