import React from "react";
import "../darkhomebase/DarkHomeBase.scss";
import AboutSection from "../about/AboutSection";
import SkillsSection from "../skills/SkillsSection";
import TimelineSection from "../timeline/TimelineSection";

export default function DarkHomeBase() {
  return (
    <div className="darkhomebase">
      <AboutSection />
      <TimelineSection />
      <SkillsSection />
    </div>
  );
}
