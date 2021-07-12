import React, { ReactElement } from 'react';

interface ExperienceItemProps {
    company: string,
    date: string,
    title: string,
    type?: string,
}

export default function ExperienceItem(data: ExperienceItemProps): ReactElement {
    return (
        <div className="experience-item-container">
            <div className="experience-item-content">
                <time className="experience-item-date">
                    {data.date}
                </time>
                <p>{data.company}</p>
                <p>{data.title}</p>
                {data.type && <p>{data.type}</p>}
                <span className="experience-item-circle" />
            </div>
        </div>
    )
}
