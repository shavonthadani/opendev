import React from 'react';
import Navbar from './components/Navbar';
import LearningSection from './components/LearningSection';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import VolunteerSection from './components/VolunteerSection';
import ContactSection from './components/ContactUsSection';
import ProjectSection from './components/ProjectSection';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
          <HomeSection id="home" />
        <AboutSection />
        <div id="projects">
        <ProjectSection/>
        </div>
        <LearningSection/>
        <div id="volunteer">
        <VolunteerSection/>
        </div>
        <div id="contact">
        <ContactSection></ContactSection>
        </div>
        

        

      </Router>
    </>
  );
}

export default App;
