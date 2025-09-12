import React from "react";
import "./UtilitiesSection.scss";
import { Heading } from "../heading/heading";
import { headerdata } from "../../../mockdata/lightdesign/headerdata";
import UtilsContainer from "../../utilcomponents/utilscontainer/UtilsContainer";

export const UtilitiesSection = (): JSX.Element => {
  return (
    <section id={headerdata.header[5].id} className="utilitiessection">
      <Heading headingText={headerdata.header[5].title} />
      <UtilsContainer />
    </section>
  );
}
