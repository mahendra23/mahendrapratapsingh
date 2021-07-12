import React from 'react';
import "./HomeLayout.scss";
import WelcomeSection from '../welcomesection/WelcomeSection';
import WhoAmISection from '../whoamisection/WhoAmISection';
import ExperienceSection from '../experience/ExperienceSection';

export default function HomeLayout() {

  return (
    <div className="Home-layout">
      <WelcomeSection />
      <WhoAmISection />
      <ExperienceSection />
    </div>
  );
}