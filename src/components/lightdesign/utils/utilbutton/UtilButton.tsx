import React from "react";
import "./UtilButton.scss";
import { FaForward } from "react-icons/fa6";

type UtilButtonProps = {
  title: string;
  onClick: () => void;
};

export const UtilButton = ({title,  onClick }: UtilButtonProps) => (
  <button className="utilbutton" title={title} onClick={onClick}>
    <FaForward />
  </button>
);
