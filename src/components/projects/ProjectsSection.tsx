import React from 'react'
import "./ProjectsSection.scss";
import { projectdata } from "../../mockdata/projectdata";
import ProjectCard from './ProjectCard';
import { Heading } from "../heading/heading";
import { headerdata } from "../../mockdata/headerdata";

export const ProjectsSection = (): JSX.Element => {
    return (
        <section id={headerdata.header[3].id} className="projectsection section">
            <Heading headingText={projectdata.title} />
            <div className="projectcontainer">
                {projectdata.repos.map((repodata) => (
                    <ProjectCard {...repodata} key={repodata.id} />
                ))}
            </div>
        </section>
    );
};
