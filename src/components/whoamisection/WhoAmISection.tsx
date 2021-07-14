import React, { ReactElement } from 'react'
import "./WhoAmISection.scss";
import { FaDownload } from 'react-icons/fa';
import mypic from "../../images/whoami/Mahen.jpg";
import {whoamidata} from "../../mockdata/aboutmedata";

const downloadResume = () => {
    //setOpen(!open);
};

export default function WhoAmISection(): ReactElement {
    return (
        <section>
            <div id="whoamisection" className="whoamisection">
                {/* <div id="whoamisection-heading" className="whoamisection-heading-container">
                    <h2>{whoamidata.title}</h2>
                </div> */}
                <div id="whoamisection-desc" className="whoamisection-desc-container">
                    <div className="whoamisection-desc-image-container">
                        <img alt="Mahen" src={mypic} className="whoamisection-desc-image" />
                    </div>
                    <div className="whoamisection-desc-detail">
                        {/* {whoamidata.description.map((item) => (<p>{item}</p> ))} */}
                        <h2>{whoamidata.title}</h2>
                        <p>Seasoned Testing Professional with more than 17 years of experience in Automation testing and Software Test Management. I have worked on Mobile & Web Applications, API, Database testing and Desktop applications across Banking domain (Digital Apps & Mobile, Payments & Cards, Retail Tools), Health Insurance & Telecom Domain. Experience in Managing AGILE and Waterfall projects & Leading Automation Centre of Excellence Team.</p>
                        <p>I love programming and apart from writiing code a d designing automatoin frmakeworks from scratch, I have also done iOS and React development.</p>
                    </div>
                </div>
                <div className="whoamisection-downloadResume-container">
                    <button onClick={downloadResume} className="downloadResume-button">
                        <FaDownload />
                        <b>&nbsp; Download Resume</b>
                    </button>
                </div>
            </div>
        </section>   
    )
}
