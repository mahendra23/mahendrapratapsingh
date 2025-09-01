import React from "react";
import "./heading.scss";

export const Heading = (props: {headingText: string}): JSX.Element => {
    return (
        <h2 className="heading">{props.headingText}</h2>
    );
};