import React from "react";
import "./AboutSection.scss";
import { MY_IMAGE, MY_LINKEDIN, RESUME_PDF } from "../../../common/constants";
import { FaLinkedin } from "react-icons/fa";

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
          <a href={RESUME_PDF} className="btn primary" download="Resume_Mahendra_Singh.pdf">Download Resume</a>
          <a
            href={MY_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
          <a href={"#timelinesection"} className="btn secondary">View My Journey</a>
        </div>
      </div>
      <div className="about-right">
        <img src={MY_IMAGE} alt="Me" />
      </div>
    </section>;
  }