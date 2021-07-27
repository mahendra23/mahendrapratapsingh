import React, { ReactElement } from 'react'
import "./ExperienceSection.scss";
import {experiencedata} from "../../mockdata/experiencedata";
import ExperienceItem from './ExperienceItem';
import Fade from 'react-reveal/Fade';

export default function ExperienceSection(): ReactElement {
    return (
        <section id="experiencesection" className="experiencesection">
            <h1 className="experiencesection-heading">{experiencedata.title}</h1>
            <div className="experiencesection-timeline-container">
                <ul>
                    {experiencedata.workexp.map((data) => (
                        <Fade right>
                            <li>
                                <ExperienceItem {...data} key={data.id}/>
                            </li>
                        </Fade>    
                    ))}
                </ul>
            </div>
        </section>
    )
}
