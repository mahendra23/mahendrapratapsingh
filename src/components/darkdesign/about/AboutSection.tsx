import React from "react";
import "./AboutSection.scss";
import { IMAGES_FOLDER, RESUME_PDF } from "../../../common/constants";

export default function AboutSection() {
    return <section className="about">
      <div className="about-left">
        <h1>
          <span className="highlight">21+ Years</span> Engineering Quality Excellence
        </h1>
        <p>
          Test Automation Leader | QA Strategist | Mentor | Agile & SAFe Expert | 
          Driving scalable automation, AI-powered testing, cross-functional team leadership, 
          and quality-first delivery across Banking, Health, Telecom, and other global industries
        </p>
        <div className="about-actions">
          <a href={RESUME_PDF} className="btn primary" download="Resume_Mahendra_Singh.pdf">Download Resume</a>
          <a href={"#journeysection"} className="btn secondary">View My Journey</a>
        </div>
      </div>
      <div className="about-right">
        <img src={`${IMAGES_FOLDER}/Mahen.jpg`} alt="Me" />
      </div>
    </section>;
  }