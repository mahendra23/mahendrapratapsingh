import React from 'react';
import "./HomeLayout.scss";
import WelcomeSection from '../welcomesection/WelcomeSection';
import WhoAmISection from '../whoamisection/WhoAmISection';
import ExperienceSection from '../experience/ExperienceSection';
import Header from '../header/Header';
import ProjectsSection from '../projects/ProjectsSection';

export default function HomeLayout() {

  return (
    <div className="Home-layout">
      <Header />
      <WelcomeSection />
      <WhoAmISection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}