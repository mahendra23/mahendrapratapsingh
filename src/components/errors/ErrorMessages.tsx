import React from "react";
import "./ErrorMessages.scss";

export const ErrorMessages = (props: {errorMessages: string[]}): JSX.Element => {
    return (
        <div className="errorMessages">
            {props.errorMessages.map((error, i) => (
                <div key={"errorMessage-"+i}>Error: {error}</div>
            ))}
        </div>
    );
}