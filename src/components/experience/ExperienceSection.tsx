import React, { ReactElement } from 'react'
import "./ExperienceSection.scss";
import {experiencedata} from "../../mockdata/experiencedata";
import ExperienceItem from './ExperienceItem';

export default function ExperienceSection(): ReactElement {
    return (
        <section>
            <div className="experiencesection">
                <div className="experiencesection-heading-container">
                    <h2>{experiencedata.title}</h2>
                </div>
                <div className="experiencesection-timeline-container">
                    {experiencedata.workexp.map((data) => (<ExperienceItem {...data} key={data.id}/>))}
                </div>
            </div>
        </section>
    )
}
