import React from "react";
import "../../darkdesign/heading/heading.scss";

export const Heading = (props: {headingText: string}): JSX.Element => {
    return (
        <h2 className="darkdesignheading">{props.headingText}</h2>
    );
};