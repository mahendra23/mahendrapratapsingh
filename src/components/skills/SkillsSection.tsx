import React from 'react';
import './SkillsSection.scss';
import { skillsData } from '../../mockdata/skillsData';
import { Heading } from "../heading/heading";
import { headerdata } from "../../mockdata/headerdata";
import { SkillCard } from "./SkillCard";

export const SkillsSection = ():JSX.Element => {
    return (
        <section id={headerdata.header[2].id} className="skillssection section">
            <Heading headingText={skillsData.title} />
            <div className="skillscontainer">
                {skillsData.skillsets && skillsData.skillsets.map((skillset, index) => (
                    <SkillCard key={skillset.title} data={skillset} isLast={skillsData.skillsets.length === index+1}/>
                ))}
            </div>
        </section>
    );
};
