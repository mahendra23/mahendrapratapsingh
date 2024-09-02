import React, { useState } from 'react'
import "./ContactDetailsSection.scss";
import { SocialIcon } from 'react-social-icons';
import { FaPhone } from "react-icons/fa6";
import { IconContext } from "react-icons";

export const ContactDetailsSection = (): JSX.Element => {
    return (
        <div className="contactdetailcontainer">
            <div className="iconcontainer extrapadding"><PhoneIcon /></div>
            <div className="iconcontainer">
                <SocialIcon fgColor="whitesmoke" url="https://www.linkedin.com/in/mahendrapsingh23/" />
            </div>
            <div className="iconcontainer">
                <SocialIcon fgColor="whitesmoke" url="mailto: mpratap.singh@gmail.com" />
            </div>
            <div className="iconcontainer">
            <SocialIcon bgColor="black" fgColor="whitesmoke" url="https://github.com/mahendra23" />
            </div>
        </div> 
    );
};

const PhoneIcon = (): JSX.Element => {
    // const [tooltipOpen, setTooltipOpen] = useState(false);
    return (
        <IconContext.Provider value={{ size: "35px", color: "black"}}>
            <a href="tel:0291276673"><FaPhone /></a>
        </IconContext.Provider>
    );
};
