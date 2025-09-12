import React from "react";
import "./Heading.scss";

export default function Heading(props: {headingText: string}) {
    return (
        <h2 className="darkdesignheading">{props.headingText}</h2>
    );
};