import React, { ReactElement } from 'react'
import ContactDetailsSection from '../contactdetails/ContactDetailsSection';
import './FooterComponent.scss';

export default function Footer(): ReactElement {
    return (
        <div className="footersection">
            <p>Designed and Developed By Mahendra Pratap Singh</p>
            <ContactDetailsSection />
        </div>
    );
}
