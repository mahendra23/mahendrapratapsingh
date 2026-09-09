import React from "react";
import "../darkhomebase/DarkHomeBase.scss";
import AboutSection from "../about/AboutSection";
import SkillsSection from "../skills/SkillsSection";
import TimelineSection from "../timeline/TimelineSection";
import TimelineSectionLightDesign from "../timeline/TimelineSectionLightDesign";
import UtilsToggleWrapper from "../utils/UtilsToggleWrapper";
import Footer from "../footer/Footer";
import { USE_LIGHT_DESIGN_TIMELINE } from "../../../common/constants";

export default function DarkHomeBase() {
  return (
    <div className="darkhomebase" id="darkhomebase">
      <UtilsToggleWrapper />
      <AboutSection />
      <SkillsSection />
      {USE_LIGHT_DESIGN_TIMELINE ? <TimelineSectionLightDesign /> : <TimelineSection />}
      <Footer />
    </div>
  );
}
