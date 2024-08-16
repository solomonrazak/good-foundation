import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Welcome from './components/about/Welcome';

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          
          <Route path="welcome" element={<Welcome />} />
        </Route>
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
