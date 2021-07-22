import React, { ReactElement, useState } from 'react';
import './SkillsSection.scss';
import Accordion from './Accordian';
import { skillsData } from '../../mockdata/skillsData';

export default function SkillsSection(): ReactElement {
    const [active, setActive] = useState("");
    return (
        <section id="skillssection" className="skillssection">
            <h1>{skillsData.title}</h1>
            {skillsData.skills.map((data) => (
                <Accordion active={active} setActive={setActive} data={data} key={data.id}/>
            ))}
        </section>
    )
}
