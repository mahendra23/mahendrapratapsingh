import React from 'react'
import "./UtilsSection.scss";
import { Heading } from "../heading/heading";
import { headerdata } from "../../mockdata/headerdata";
import UtilsCard from "./UtilsCard";

export const UtilsSection = (): JSX.Element => {
    return (
        <section id={headerdata.header[5].id} className="utilssection section">
            <Heading headingText={"UTIILITIES"} />
            <div className="utilscontainer">
                <UtilsCard name="Generate Password" desc="Generate a secure and strong password" />
                
            </div>
        </section>
    );
};
