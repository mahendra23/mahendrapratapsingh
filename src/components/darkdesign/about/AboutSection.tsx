import React from "react";
import "./AboutSection.scss";
import { MY_IMAGE, MY_LINKEDIN, RESUME_PDF, USE_LIGHT_DESIGN_TIMELINE } from "../../../common/constants";
import { FaDownload, FaLinkedin } from "react-icons/fa";

export default function AboutSection() {
    return <section className="about" id="aboutsection">
      <div className="about-left">
        <h1>
          <span className="highlight">22+ Years</span> of Engineering Quality Excellence
        </h1>
        <p>
          Quality Engineering Leader | Test Automation Architect | AI-Assisted Testing | QA Strategist
        </p>
        <p>
          Designing scalable automation, leveraging Generative AI and AI Agents, 
          and driving quality-first delivery across Banking, Financial Services, 
          Government, Health Insurance, Land Information, and Telecom.
        </p>
        <div className="about-actions">
          <a href={RESUME_PDF} className="btn primary" download="Resume_Mahendra_Singh.pdf">
            <FaDownload /> Resume
          </a>
          <a
            href={MY_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href="#skillssection" className="btn tertiary">Skills</a>
          <a
            href={USE_LIGHT_DESIGN_TIMELINE ? "#timelinesection-light-design" : "#timelinesection"}
            className="btn tertiary"
          >
            Professional Journey
          </a>
        </div>
      </div>
      <div className="about-right">
        <img src={MY_IMAGE} alt="Me" />
      </div>
    </section>;
  }