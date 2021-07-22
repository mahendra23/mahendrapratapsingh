import React from 'react';
import "./HomeLayout.scss";
import WelcomeSection from '../welcome/WelcomeSection';
import ExperienceSection from '../experience/ExperienceSection';
import ProjectsSection from '../projects/ProjectsSection';
import AboutmeSection from '../about/AboutSection';
import SkillsSection from '../skills/SkillsSection';
import FooterComponent from '../Footer/FooterComponent';

export default function HomeLayout() {

  return (
    <div>
      <div className="Home-layout">
        <WelcomeSection />
        <AboutmeSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <FooterComponent />
      </div>
    </div>
  );
}