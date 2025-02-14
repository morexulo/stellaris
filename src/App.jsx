// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <SpeedInsights />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
      {/* Solo muestra el Footer en la Home */}
      {location.pathname === "/" && <Footer />}
    </div>
  );
};

export default App;
