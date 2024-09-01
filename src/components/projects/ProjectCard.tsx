import React, { ReactElement } from 'react'
import "./ProjectCard.scss";
import { ICONS_FOLDER } from "../../common/constants";

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
                    <img src={`${ICONS_FOLDER}/${image}`} alt="tool-image" />
                ))}
            </div>
            <div className="cardheading">
                <p>{data.name}</p>
            </div>
            <div className="carddesc">
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
        </div>
    )
}
