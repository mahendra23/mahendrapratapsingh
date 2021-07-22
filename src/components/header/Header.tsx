import React, { ReactElement } from 'react'
import "./Header.scss";

export default function Header(): ReactElement {
  return (
    <div id="header" className="header-section">
      <div className="header-container">
        <div className="header-item-container">
          <a href="/mahendrapratapsingh">HOME</a>
        </div>
        <div className="header-item-container">
          <a href="/Aboutme">ABOUT</a>
        </div>
        <div className="header-item-container">
          <a href="/Experience">JOURNEY</a>
        </div>
        <div className="header-item-container">
          <a href="/Skills">SKILLS</a>
        </div>
        <div className="header-item-container">
          <a href="/Projects">PROJECTS</a>
        </div>
      </div>
    </div>
  );
}
