import React, { ReactElement } from 'react'
import "./Header.scss";

export default function Header(): ReactElement {
  return (
    <div id="header" className="header-section">
      <div className="header-container">
        <a href="#welcomesection">
          Home
        </a>
        <a href="#aboutmesection">
          About
        </a>
        <a href="#experiencesection">
          Journey
        </a>
        <a href="#projectsection">
          Projects
        </a>
      </div>
    </div>
  )
}
