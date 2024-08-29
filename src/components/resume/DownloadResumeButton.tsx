import React from 'react';
import { FaDownload } from "react-icons/fa";
import "./DownloadResume.scss";
import { IconContext } from "react-icons";

export const DownloadResumeButton = (props: {buttonTitle: string, showIcon: boolean}): JSX.Element => {
    const pdfUrl = "../../assets/Resume_Mahendra_Singh.pdf";
    return (
        <div className="downloadresume-container">
            <a href={pdfUrl} download="Resume_Mahendra_Singh.pdf">
            &nbsp;{props.buttonTitle}
                &nbsp;&nbsp;
                {props.showIcon && <DownloadIcon />}
            </a>
        </div>
    );
};

const DownloadIcon = (): JSX.Element => {
    return (
    <IconContext.Provider value={{ size: "20px"}}>
        <FaDownload />
    </IconContext.Provider>
    );
};