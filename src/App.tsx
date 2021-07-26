import React, { useState, useEffect } from "react";
import './App.scss';
import Footer from "./components/Footer/FooterComponent";
import Header from "./components/header/Header";
import Preloader from "./components/preloader/Preloader";
import WelcomeSection from "./components/welcome/WelcomeSection";
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';

function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 100);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App">
        <Header />
        <WelcomeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
