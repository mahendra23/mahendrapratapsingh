// import React from "react";
// import "./AboutSection.scss";
// import { MY_IMAGE, RESUME_PDF } from "../../../common/constants";

// export default function AboutSection() {
//     return <section className="about" id="aboutsection">
//       <div className="about-left">
//         <h1>
//           <span className="highlight">21+ Years</span> Engineering Quality Excellence
//         </h1>
//         <p>
//           Test Automation Leader | QA Strategist | Mentor | Agile & SAFe Expert | 
//           Driving scalable automation, AI-powered testing, cross-functional team leadership, 
//           and quality-first delivery across Banking, Health, Telecom, and other global industries
//         </p>
//         <div className="about-actions">
//           <a href={RESUME_PDF} className="btn primary" download="Resume_Mahendra_Singh.pdf">Download Resume</a>
//           <a href={"#timelinesection"} className="btn secondary">View My Journey</a>
//         </div>
//       </div>
//       <div className="about-right">
//         <img src={MY_IMAGE} alt="Me" />
//       </div>
//     </section>;
//   }

import React from "react";
import "./AboutSection.scss";
import { MY_IMAGE, RESUME_PDF, MY_LINKEDIN } from "../../../common/constants";
import { FaLinkedin } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="about" id="aboutsection">
      <div className="about-left">
        <h1>
          <span className="highlight">21+ Years</span> Engineering Quality Excellence
        </h1>
        <p>
          Test Automation Leader | QA Strategist | Mentor | Agile & SAFe Expert |
          Driving scalable automation, AI-powered testing, cross-functional team
          leadership, and quality-first delivery across Banking, Health, Telecom,
          and other global industries
        </p>
        <div className="about-actions">
          <a
            href={RESUME_PDF}
            className="btn primary"
            download="Resume_Mahendra_Singh.pdf"
          >
            Download Resume
          </a>
          <a
            href={MY_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            <FaLinkedin size={20} /> Connect on LinkedIn
          </a>
          <a href={"#timelinesection"} className="btn primary">
            View My Journey
          </a>
        </div>
      </div>
      <div className="about-right">
        <img src={MY_IMAGE} alt="Me" />
      </div>
    </section>
  );
}
