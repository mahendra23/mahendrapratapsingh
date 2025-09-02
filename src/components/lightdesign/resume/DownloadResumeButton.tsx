import React from 'react';
import { FaDownload } from "react-icons/fa";
import "./DownloadResume.scss";
import { IconContext } from "react-icons";
import { RESUME_PDF } from "../../../common/constants";

export const DownloadResumeButton = (props: {buttonTitle: string, showIcon: boolean}): JSX.Element => {
    return (
        <div className="downloadresumecontainer">
            <a href={RESUME_PDF} download="Resume_Mahendra_Singh.pdf">
                &nbsp;{props.buttonTitle}
                &nbsp;&nbsp;
                {props.showIcon && <DownloadIcon />}
            </a>
        </div>
    );
};

const DownloadIcon = (): JSX.Element => {
    return (
        <IconContext.Provider value={{className: "downloadicon"}}>
            <FaDownload />
        </IconContext.Provider>
    );
};