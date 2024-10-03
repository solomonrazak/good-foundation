import React, { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Event from "./pages/Event";


import QuickFacts from "./components/about/QuickFacts";
import Calendar from "./components/about/Calendar";



import Admissions from "./pages/Admissions";
import MainAdmission from "./components/admission/MainAdmission";
import Apply from "./components/admission/Apply";
import Policy from "./components/admission/Policy";

import './App.css';
import Visit from "./components/admission/Visit";
import { Loading } from "./features/Loading";
import Subjects from "./pages/Subjects";


const Home = lazy(() => import("./pages/Home"));
const MissionandHistory = lazy(() => import("./components/about/MissionandHistory"));
const Welcome = lazy(() => import("./components/about/Welcome"));
const Staff = lazy(() => import("./pages/Staff"));
const Achievements = lazy(() => import("./components/about/Achievements"));
const AchievementDetail = lazy(() => import("./components/about/AchievementDetail"));
const Contact = lazy(() => import("./pages/Contact"));


function App() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Suspense fallback={<div><Loading /></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="missionandhistory" element={<MissionandHistory />} />
          <Route path="quickfacts" element={<QuickFacts />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="achievements/:id" element={<AchievementDetail />} />
        </Route>
        <Route path="/admissions" element={<Admissions />}>
          <Route path="main-admission" element={<MainAdmission />} />
          <Route path="apply" element={<Apply />} />
          <Route path="nondiscriminatorypolicy" element={<Policy />} />
          <Route path="visit" element={<Visit />} />
        </Route>
        <Route path="/staff" element={<Staff />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subjects" element={<Subjects />} />
      </Routes>
      </Suspense>
      <Footer />
      <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
