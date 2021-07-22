import React, { ReactElement } from 'react'
import "./AboutSection.scss";
import { FaDownload } from 'react-icons/fa';
import mypic from "../../images/whoami/Mahen.jpg";
import { SocialIcon } from 'react-social-icons';

export default function AboutSection(): ReactElement {
    return (
        <section id="aboutsection" className="aboutsection">
            <div className="about-container">
                <div className="about-image-container">
                    <img alt="Mahen" src={mypic} className="about-image" />
                </div>
                <div className="about-description-container">
                    <h1>ABOUT ME</h1>
                    <p>Seasoned Testing Professional with more than 
                        <span className="blue"> 17 years of experience in Automation testing and 
                        Software Test Management.</span>
                        <br/>
                        I have worked on
                        <span className="blue"> Mobile & Web Applications, API, Database testing and 
                        Desktop applications </span>
                        working across multiple domains
                        <span className="blue"> (Banking (Digital Apps & Mobile, Payments & Cards, Retail Tools),
                        Health Insurance & Telecom).</span>
                        <br/>
                        Experience in
                        <span className="blue"> Managing AGILE and Waterfall projects & Leading Automation 
                        Centre of Excellence Teams.</span>
                        <br/>
                        I love programming and have experience<span className="blue"> developing iOS Native 
                        apps and React web.</span>
                    </p>
                    <div className="about-contactdetails-container">
                        <div className="about-contactme-container">
                            <h1>Contact Details</h1>
                            <p>Mahendra Pratap Singh</p>
                            <div className="about-contactme-icon-container">
                                <SocialIcon fgColor="whitesmoke" url="mailto: mpratap.singh@gmail.com" />
                                <SocialIcon fgColor="whitesmoke" url="http://nz.linkedin.com/in/mahendrapsingh23" />
                                <SocialIcon bgColor="black" fgColor="whitesmoke" url="https://github.com/mahendra23" />
                            </div>
                        </div>
                        <div className="about-resume-container">
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
