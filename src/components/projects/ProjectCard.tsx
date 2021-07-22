import React, { ReactElement } from 'react'
import "./ProjectCard.scss";

interface ProjectData {
    name: string,
    desc: string,
    link: string,
    techs: string[],
    images: string[],
}

export default function ProjectCard(data: ProjectData): ReactElement {
    return (
        <div className="cardcontainer">
            <div className="imagecontainer">
                {data.images.map((image) => (
                    <img src={require(`../../images/project/${image}`).default} alt="" />
                ))}
            </div>
            <div className="heading">
                <h1>{data.name}</h1>
            </div>
            <div className="desc">
                <p>{data.desc}</p>
            </div>
            <div className="link">
                <a
                    href={data.link}
                    target="_blank" rel="noreferrer"
                    className="contactme-option-icon"
                >
                    <p>GIT-REPO</p>
                </a>
            </div>
            <div className="techs">
                {data.techs.map((tech) => (
                    <span>{tech}</span>
                ))}
            </div>
        </div>
    )
}
