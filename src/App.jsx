import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Welcome from './components/about/Welcome';
import MissionandHistory from './components/about/MissionandHistory';
import QuickFacts from './components/about/QuickFacts';
import Calendar from './components/about/Calendar';
import Staff from './pages/Staff';
import Achievements from './components/about/Achievements';
import AchievementDetail from './components/about/AchievementDetail';
import Admissions from './pages/Admissions';
import MainAdmission from './components/admission/MainAdmission';
import Apply from './components/admission/Apply';

function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          
          <Route path="welcome" element={<Welcome />} />
          <Route path="missionandhistory" element={<MissionandHistory />} />
          <Route path="quickfacts" element={<QuickFacts />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="achievements" element={<Achievements />}/>
          <Route path="achievements/:id" element={<AchievementDetail />} /> 
        </Route>
        <Route path="/admissions" element={<Admissions />}>
        <Route path="main-admission" element={<MainAdmission />}/>
        <Route path="apply" element={<Apply />} />
        </Route>
        <Route path="staff" element={<Staff />}/>
        <Route path="/event" element={<Event />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
