import React from 'react'
import {ContactDetailsSection} from '../contactdetails/ContactDetailsSection';
import './FooterComponent.scss';

export const Footer = (): JSX.Element => {
    return (
        <div className="section footersection">
            <p>Mahendra Pratap Singh © | all rights reserved</p>
            <div className="footercontactdetails">
                <ContactDetailsSection />
            </div>
        </div>
    );
};