import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import './MenuExpandComponent.scss';
import { SectionPath } from '../../../constants';

export default function MenuExpandComponent(): ReactElement {
    return (
    <div className="Menu-expand Menu-expand-styling">Know me better! 🐱
        <ul className="Menu-list">
            <li><Link className="Menu-link" to={SectionPath.WhoAmI}>Who am i?</Link></li>
            <li><Link className="Menu-link" to={SectionPath.CareerOverview}>Career Overview</Link></li>
            <li><Link className="Menu-link" to={SectionPath.DomainKnowledge}>Domain Knowledge</Link></li>
            <li><Link className="Menu-link" to={SectionPath.TechnicalSkills}>Technical Skills</Link></li>
            <li><Link className="Menu-link" to={SectionPath.PersonalGitRepositories}>Personal Git Repositories</Link></li>
            <li><Link className="Menu-link" to={SectionPath.Certifications}>Certifications</Link></li>
            <li><Link className="Menu-link" to={SectionPath.PublicationsandWebinars}>Publications and Webinars</Link></li>
            <li><Link className="Menu-link" to={SectionPath.AwardsAchievements}>Awards & Achievements</Link></li>
            <li><Link className="Menu-link" to={SectionPath.Trainings}>Trainings</Link></li>
            <li><Link className="Menu-link" to={SectionPath.Attainments}>Attainments</Link></li>
            <li><Link className="Menu-link" to={SectionPath.OrganisationalExperience}>Organisational Experience</Link></li>
        </ul>
    </div>
    );
}
