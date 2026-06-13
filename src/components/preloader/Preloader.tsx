import React from "react";
import "./Preloader.scss";
import logo from "../../images/logo-no-shadow.png";

interface PreloaderProps {
  load: boolean;
}

export const Preloader = ({ load }: PreloaderProps) => {
  return (
    <div 
      className={load ? "Preloader" : "Preloader-none"} 
      id={load ? "preloader" : "preloader-none"}
    >
      <img className="Preloader-img" src={logo} alt="Loading..." />
    </div>
  );
};
