import React from "react";
import "./MPLogo.scss";
import { MY_LOGO } from "../../../common/constants";

interface MPLogoProps {
  onClick:(event: React.MouseEvent) => void;
}

export const MPLogo: React.FC<MPLogoProps> = ({onClick}) => {

  return (
    <button className="mp-initials-icon" onClick={onClick} title={"Icon"}>
      <img src={MY_LOGO} alt={"MP-LOGO"} className="mp-initials-icon-img" />
    </button>
  );
};