import React from 'react'
import "./AboutSection.scss";
import { headerdata } from "../../mockdata/headerdata";
import { DownloadResumeButton } from "../resume/DownloadResumeButton";
import { Heading } from "../heading/heading";
import { IMAGES_FOLDER } from "../../common/constants";
import { ContactDetailsSection } from "../contactdetails/ContactDetailsSection";

export const AboutSection = (): JSX.Element => {
    const isHomeDisplayed = headerdata.header[0].display;
    return (
        <section id={headerdata.header[1].id} className="aboutsection">
            {isHomeDisplayed && <Heading headingText="ABOUT ME" />}
            <div className="aboutcontainer">
                <div className="aboutimagecontainer">
                    <img alt="Mahen" src={`${IMAGES_FOLDER}/Mahen.jpg`} className="aboutimage" />
                </div>
                <div className="aboutdescriptioncontainer">
                    <p>
                        I am a Software Testing professional with over 
                        <span>20 years of expertise in Test Automation, Application Development, Program Management, and Client & Stakeholder Engagement.</span> 
                        <br/>
                        With over 16 years of demonstrated excellence in 
                        <span>developing test automation strategies, designing and implementing automation frameworks (spanning Web, Mobile Applications, and API testing)</span>
                        , and leading Automation Centres of Excellence, I have been instrumental in driving quality-focused initiatives across organizations.
                        <br/>
                        Backed by a strong foundation in 
                        <span> Agile methodologies and SAFe Agile, </span>I bring over a decade of rich experience in managing both Agile and Waterfall projects,
                        <span> cultivating client relationships, and leading high-performing teams. </span>
                        <br/>
                        My career spans multiple domains, including
                        <span> Banking (Digital Technology, Web & Mobile Apps, Payments & Cards, Retail Tools), Land Information Management, Health Insurance, and Telecom, </span>
                        reflecting my versatility and adaptability in complex and dynamic environments.
                        <br/>
                        <br/>
                        <DownloadResumeButton buttonTitle="Feel free to download my resume for more information." showIcon={false} />
                    </p>
                    <ContactDetailsSection />
                </div>
            </div>
        </section>   
    );
};
