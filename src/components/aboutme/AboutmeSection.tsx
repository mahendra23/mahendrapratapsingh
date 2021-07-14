import React, { ReactElement } from 'react'
import "./AboutmeSection.scss";
import { FaDownload, FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import mypic from "../../images/whoami/Mahen.jpg";

export default function AboutmeSection(): ReactElement {
    return (
        <section id="aboutmesection" className="aboutmesection">
            <div className="aboutme-container">
                <div className="aboutme-image-container">
                    <img alt="Mahen" src={mypic} className="aboutme-image" />
                </div>
                <div className="aboutme-description-container">
                    <h1>Who Am I?</h1>
                    <p>Seasoned Testing Professional with more than 
                        <span className="blue"> 17 years of experience in Automation testing and Software Test Management.</span>
                        <br/>
                        I have worked on
                        <span className="blue"> Mobile & Web Applications, API, Database testing and Desktop applications </span>
                        working across multiple domains
                        <span className="blue"> (Banking (Digital Apps & Mobile, Payments & Cards, Retail Tools),
                         Health Insurance & Telecom).</span>
                         <br/>
                          Experience in
                          <span className="blue"> Managing AGILE and Waterfall projects & Leading Automation Centre of Excellence Teams.</span>
                          <br/>
                          I love programming and have experience<span className="blue"> developing iOS Native apps and React web.</span>
                    </p>
                    <div className="aboutme-contactdetails-container">
                        <div className="aboutme-contactme-container">
                            <h1>Contact Details</h1>
                            <p>Mahendra Pratap Singh</p>
                            <div className="aboutme-contactme-icon-container">
                                <div className="contactme-option">
                                    <a href="mailto: mpratap.singh@gmail.com" className="contactme-option-icon"><FaEnvelope /></a>
                                </div>
                                <div className="contactme-option">
                                    <a
                                     href="http://nz.linkedin.com/in/mahendrapsingh23"
                                     target="_blank" rel="noreferrer"
                                     className="contactme-option-icon"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="aboutme-resume-container">
                            <a href="../../assers/Resume_Mahendra_Singh.pdf" download>
                                <FaDownload />
                                <b>&nbsp; Download Resume</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
}
