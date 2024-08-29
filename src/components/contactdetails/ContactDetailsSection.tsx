import React from 'react'
import "./ContactDetailsSection.scss";
import { SocialIcon } from 'react-social-icons';

export const ContactDetailsSection = (): JSX.Element => {
    return (
        <div className="contactdetailcontainer">
            <SocialIcon fgColor="whitesmoke" url="mailto: mpratap.singh@gmail.com" />
            <SocialIcon fgColor="whitesmoke" url="https://www.linkedin.com/in/mahendrapsingh23/" />
            <SocialIcon bgColor="black" fgColor="whitesmoke" url="https://github.com/mahendra23" />
        </div> 
    );
};
