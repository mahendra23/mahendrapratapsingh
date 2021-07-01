import Slide from '@material-ui/core/Slide';
import React, { ReactElement } from 'react'
import mypic from "../../images/whoami/Mahen.jpg";
import "./WhoAmISection.scss";

const cardata = {
    title: "Who Am I?",
    description: ["Seasoned Testing Professional with more than 17 years of experience in Automation testing (Design, Development, and maintenance of Automation Frameworks) and Software Test Management",
    "Experience on Mobile & Web Applications, API, Database testing and Desktop applications",
    "Experitest Seetest Certified Professional, Experitest License 201406231849",
    "Experience in Banking domain (Digital Apps & Mobile, Payments & Cards, Retail Tools, Health Insurance & Telecom Domain",
    "Experience in Managing AGILE and Waterfall projects & Leading Automation Centre of Excellence Team"]
  } 

const downloadResume = () => {
    //setOpen(!open);
};

export default function WhoAmI(): ReactElement {
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className="Whoami-section" id="whoami-section">
                <h2 id="whoami-section-heading" className="Whoami-section-heading">{cardata.title}</h2>
                <div id="whoami-section-image-container" className="Whoami-section-image-container">
                    <img src={mypic} alt="" className="Whoami-section-image" />    
                </div>
                <div id="whoami-section-text-container" className="Whoami-section-text-container">
                    {cardata.description.map((item) => (<p>{item}</p> ))}
                </div>
                <button className="Whoami-section-button" onClick={downloadResume}>
                    <i className="fa fa-download"></i>Download Resume
                </button>
            </div>
        </Slide>
    )
}
