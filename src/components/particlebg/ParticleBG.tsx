import React, { ReactElement } from "react";
import Particles from "react-tsparticles";
import opt from "./particles.json";

export default function ParticleBG(): ReactElement {
  return (
    <Particles params={{opt}} />
  )
}
