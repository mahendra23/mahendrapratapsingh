import React from 'react'
import "./heading.scss";
import { CBadge } from "@coreui/react";

export const Heading = (props: {headingText: string}): JSX.Element => {
    return (
        <CBadge className="heading">{props.headingText}</CBadge>
    );
};