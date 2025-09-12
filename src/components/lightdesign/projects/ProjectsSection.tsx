import React from 'react'
import "./ProjectsSection.scss";
import { projectdata } from "../../../mockdata/lightdesign/projectdata";
import ProjectCard from './ProjectCard';
import LightHeading from "../../lightdesign/heading/heading";
import { headerdata } from "../../../mockdata/lightdesign/headerdata";

export const ProjectsSection = (): JSX.Element => {
    return (
        <section id={headerdata.header[3].id} className="projectsection section">
            <LightHeading headingText={projectdata.title} />
            <div className="projectcontainer">
                {projectdata.repos.map((repodata) => (
                    <ProjectCard {...repodata} key={repodata.name} />
                ))}
            </div>
        </section>
    );
};
