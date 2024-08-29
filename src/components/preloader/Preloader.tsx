import React from "react";
import "./Preloader.scss";
import logo from "../../images/logo-no-shadow.png";

export const Preloader = (props: { load: any; }) => {
  return <div className={props.load ? "Preloader" : "Preloader-none"} id={props.load ? "preloader" : "preloader-none"}>
    <img className="Preloader-img" src={logo} alt="" />
  </div>;
};
