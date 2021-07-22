import React, { ReactElement } from 'react'
import "./ProjectsSection.scss";
import { projectdata } from "../../mockdata/projectdata";
import ProjectCard from './ProjectCard';

export default function ProjectsSection(): ReactElement {
    return (
        <section id="projectsection" className="projectsection">
            <h1>{projectdata.title}</h1>
            <div className="projectcontainer">
                {projectdata.repos.map((repodata) => (
                    <ProjectCard {...repodata} key={repodata.id} />
                ))}
            </div>
        </section>
    )
}
