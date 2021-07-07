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
                <div id="whoamisection-heading" className="whoamisection-heading-container">
                    <h2>{whoamidata.title}</h2>
                </div>
                <div id="whoamisection-desc" className="whoamisection-desc-container">
                    <div className="whoamisection-desc-image-container">
                        <img alt="Mahen" src={mypic} className="whoamisection-desc-image" />
                    </div>
                    <div className="whoamisection-desc-detail">
                        {whoamidata.description.map((item) => (<p>{item}</p> ))}
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
