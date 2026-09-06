import React from "react";
import "../darkhomebase/DarkHomeBase.scss";
import AboutSection from "../about/AboutSection";
import SkillsSection from "../skills/SkillsSection";
import TimelineSection from "../timeline/TimelineSection";
import UtilsToggleWrapper from "../utils/UtilsToggleWrapper";
import Footer from "../footer/Footer";

export default function DarkHomeBase() {
  return (
    <div className="darkhomebase" id="darkhomebase">
      <UtilsToggleWrapper />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <Footer />
    </div>
  );
}
