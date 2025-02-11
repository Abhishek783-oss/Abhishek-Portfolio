// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillsCarousel from './components/SkillsCarousel';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <SkillsCarousel />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
