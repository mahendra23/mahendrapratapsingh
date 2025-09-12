import React from "react";
import "./UtilitiesSection.scss";
import LightHeading from "../heading/heading";
import { headerdata } from "../../../mockdata/lightdesign/headerdata";
import UtilsContainer from "../../utilcomponents/utilscontainer/UtilsContainer";

export const UtilitiesSection = (): JSX.Element => {
  return (
    <section id={headerdata.header[5].id} className="utilitiessection">
      <LightHeading headingText={headerdata.header[5].title} />
      <UtilsContainer />
    </section>
  );
}
