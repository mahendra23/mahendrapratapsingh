import React, { ReactElement } from 'react';

interface ExperienceItemProps {
    company: string,
    date: string,
    title: string,
    type?: string,
}

export default function ExperienceItem(data: ExperienceItemProps): ReactElement {
    return (
        <div className="experiencesection-timeline-item-container">
            <h2>{data.title}</h2>
            <p>{data.company}</p>
            <p>{data.date}</p>
            {data.type && <p>{data.type}</p>}
        </div>
    )
}
