import React from "react";
import "./HomeBase.scss";
import JourneySection from "../journey/JourneySection";
import AboutSection from "../about/AboutSection";
import SkillsSection from "../skills/SkillsSection";

export default function HomeBase() {
  return (
    <div className="homebase">
      <AboutSection />
      <JourneySection />
      <SkillsSection />
    </div>
  );
}
