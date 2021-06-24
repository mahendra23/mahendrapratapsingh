import React, { ReactElement } from 'react'
import './CardComponent.scss';
import menuImage from '../../images/Mahen.jpg';

export default function CardComponent(props: { title: string; children: React.ReactNode;}): ReactElement {
    return (
        <div className="Card-container Card-container-text">
            <div className="Card-header">
                <img src={menuImage} className="Card-image" alt="ME" />
                <div className="Card-title-shape">
                    <p className="Card-title">{props.title}</p>
                </div>
            </div>
            <div className="Card-description">
                {props.children}
            </div>
        </div>
    )
}
