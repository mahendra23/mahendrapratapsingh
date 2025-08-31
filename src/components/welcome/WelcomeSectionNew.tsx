import React from "react";
import "./WelcomeSectionNew.scss"
import { DownloadResumeButton } from "../resume/DownloadResumeButton";

export const WelcomeSectionNew = (): JSX.Element => {
  return (
    <section className="about-section">
      <div className="overlay" />
      <div className="content">
        <div className="avatar">MPS</div>
        <h1 className="name">Mahendra Pratap Singh</h1>
        <p className="description">
           With over 20 years of experience in Test Automation, Test Management, and Quality Assurance, 
           I have led cross-functional teams of 20+ professionals across global geographies to deliver complex projects with precision and quality. 
           As a seasoned Test Automation Architect with 16+ years of expertise, I specialize in designing scalable frameworks for web, mobile, 
           and API testing, championing shift-left principles to accelerate delivery and improve efficiency. 
           My background spans Agile, SAFe, and Waterfall methodologies, with proven success in developing 
           custom automation solutions for healthcare EDI compliance, as well as driving quality initiatives 
           in banking, health insurance, land information, and telecom industries. Recognized for building strong QA strategies, 
           implementing risk-based testing, and leading defect management, I am equally passionate about mentoring teams, 
           fostering collaboration, and embedding a culture of innovation and quality excellence across organizations.
            <DownloadResumeButton buttonTitle="Feel free to download my resume for more information." showIcon={false} />
        </p>
        <button className="more-btn">More</button>
      </div>
    </section>
  );
}
