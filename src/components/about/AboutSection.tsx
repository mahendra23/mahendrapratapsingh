import React from 'react'
import "./AboutSection.scss";
import { headerdata } from "../../mockdata/headerdata";
import { DownloadResumeButton } from "../resume/DownloadResumeButton";
import { Heading } from "../heading/heading";
import { IMAGES_FOLDER } from "../../common/constants";

export const AboutSection = (): JSX.Element => {
    return (
        <section id={headerdata.header[1].id} className="aboutsection">
            <Heading headingText="ABOUT ME" />
            <div className="aboutcontainer">
                <div className="aboutimagecontainer">
                    <img alt="Mahen" src={`${IMAGES_FOLDER}/Mahen.jpg`} className="aboutimage" />
                </div>
                <div className="aboutdescriptioncontainer">
                    <p>
                        I am a Software Testing professional with over 
                        <span> 20 years of experience </span> 
                        in
                        <span> Test Automation, and Application Development, 
                        Program Management, Client & Stakeholder Management</span>.
                        <br/>
                        With over 16 years of demonstrated expertise in
                        <span> test automation strategy, design & implementation of 
                            automation frameworks (for Web & Mobile Applications and API testing)
                        </span>
                        , and leadership of the
                        <span> Automation Centre of Excellence Teams</span>.
                        <br/>
                        With Strong background in Agile methodologies and
                        <span> SAFe Agile, </span>
                        I have over 6 years of rich experience in
                        <span> managing Agile and Waterfall </span>
                        projects, fostering client relationships, driving strategic 
                        initiatives, and
                        <span> leading high-performing teams</span>.
                        <br/>
                        Over the past two decades I have worked in
                        <span> multiple domains </span>like 
                        <span> Banking (Digital Technology, Web & Mobile Apps, Payments & Cards, 
                        Retail Tools), Land information Management, Health Insurance, and Telecom.
                        </span>
                        <br/>
                        <br/>
                        <DownloadResumeButton buttonTitle="Feel free to download my resume for more information." showIcon={false} />
                    </p>
                </div>
            </div>
        </section>   
    );
};
