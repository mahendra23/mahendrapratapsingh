import React, { ReactElement } from 'react'
import "./WhoAmISection.scss";
import { FaDownload } from 'react-icons/fa';
import mypic from "../../images/whoami/Mahen.jpg";

const cardata = {
    title: "Who Am I?",
    description: ["Seasoned Testing Professional with more than 17 years of experience in Automation testing and Software Test Management",
    "Experience on Mobile & Web Applications, API, Database testing and Desktop applications",
    "Experitest Seetest Certified Professional, Experitest License 201406231849",
    "Experience in Banking domain (Digital Apps & Mobile, Payments & Cards, Retail Tools, Health Insurance & Telecom Domain",
    "Experience in Managing AGILE and Waterfall projects & Leading Automation Centre of Excellence Team"]
} 

const downloadResume = () => {
    //setOpen(!open);
};

export default function WhoAmISection(): ReactElement {
    return (
        <section>
            <div id="whoamisection" className="whoamisection">
                <div id="whoamisection-heading" className="whoamisection-heading-container">
                    <h2>{cardata.title}</h2>
                </div>
                <div id="whoamisection-desc" className="whoamisection-desc-container">
                    <div className="whoamisection-desc-image-container">
                        <img alt="Mahen" src={mypic} className="whoamisection-desc-image" />
                    </div>
                    <div className="whoamisection-desc-detail">
                        {cardata.description.map((item) => (<p>{item}</p> ))}
                    </div>
                </div>
                <div>
                    <button onClick={downloadResume} className="downloadResume-button">
                        <FaDownload />
                        <b>&nbsp; Download Resume</b>
                    </button>
                </div>
            </div>
        </section>
        
    )
}
