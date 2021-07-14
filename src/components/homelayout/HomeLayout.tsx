import React from 'react';
import "./HomeLayout.scss";
import WelcomeSection from '../welcomesection/WelcomeSection';
import ExperienceSection from '../experience/ExperienceSection';
import Header from '../header/Header';
import ProjectsSection from '../projects/ProjectsSection';
import AboutmeSection from '../aboutme/AboutmeSection';

export default function HomeLayout() {

  return (
    <div>
      <Header />
      <div className="Home-layout">
        <WelcomeSection />
        <AboutmeSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </div>
  );
}