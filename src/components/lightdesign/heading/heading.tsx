import React from "react";
import "./heading.scss";
import { CBadge } from "@coreui/react";

export default function LightHeading(props: { headingText: string; }) {
    return (
        <CBadge className="heading">{props.headingText}</CBadge>
    );
}