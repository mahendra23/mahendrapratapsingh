import React from "react";
import "./Preloader.scss";
import { MY_LOGO } from "../../common/constants";

interface PreloaderProps {
  load: boolean;
}

export const Preloader = ({ load }: PreloaderProps) => {
  return (
    <div 
      className={load ? "Preloader" : "Preloader-none"} 
      id={load ? "preloader" : "preloader-none"}
    >
      <img className="Preloader-img" src={MY_LOGO} alt="Loading..." />
    </div>
  );
};
