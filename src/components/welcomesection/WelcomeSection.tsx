import React, { ReactElement } from 'react';
import Type from "./Type";
import "./WelcomeSection.scss";
import homeimg from "../../images/home/home-bg6.jpg";

export default function WelcomeSection(): ReactElement {
    return (
        <section>
            <div id="welcomesection" className="welcomesection">
                <div className="welcomesection-text-container">
                    <p className="welcome">Hi There! <span className="Welcome-wave">👋</span></p>
                    <p className="welcomename">I'M MAHENDRA PRATAP SINGH</p>
                    <p className="welcomedesc">A passionate Full Stack Automation Engineer 🚀 +</p>
                    <div className="welcometype">
                        <Type />
                    </div>
                </div>
                <div className="welcomesection-image-container">
                    <img src={homeimg} alt="" className="welcomesection-image" />
                </div>
            </div>
        </section>
    )
}
