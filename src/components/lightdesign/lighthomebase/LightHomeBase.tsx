import React from "react";
import "./LightHomeBase.scss";
import { AboutSection } from "../about/AboutSection";
import { SkillsSection } from "../skills/SkillsSection";
import { ProjectsSection } from "../projects/ProjectsSection";
import { Footer } from "../Footer/FooterComponent";
import { WelcomeSection } from "../welcome/WelcomeSection";
import { JourneySection } from "../journey/JourneySection";
import { sectionVisibility } from "../../../mockdata/lightdesign/sectionVisibility";
import { UtilitiesSection } from "../utils/UtilitiesSection";

export default function LightHomeBase() {

  return (
    <div className="lighthomebase">
      {sectionVisibility.welcomeSection && <WelcomeSection />}
      {sectionVisibility.aboutSection && <AboutSection />}
      {sectionVisibility.skillsSection && <SkillsSection />}
      {sectionVisibility.journeySection && <JourneySection />}
      {sectionVisibility.projectSection && <ProjectsSection />}
      {sectionVisibility.utilsSection && <UtilitiesSection />}
      <Footer />
    </div>
  );
}