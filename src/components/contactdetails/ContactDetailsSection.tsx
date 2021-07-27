import React, { ReactElement } from 'react'
import "./ContactDetailsSection.scss";
import { SocialIcon } from 'react-social-icons';

export default function ContactDetailsSection(): ReactElement {
    return (
        <div className="contactdetail-container">
            <SocialIcon fgColor="whitesmoke" url="mailto: mpratap.singh@gmail.com" />
            <SocialIcon fgColor="whitesmoke" url="http://nz.linkedin.com/in/mahendrapsingh23" />
            <SocialIcon bgColor="black" fgColor="whitesmoke" url="https://github.com/mahendra23" />
        </div> 
    )
}
