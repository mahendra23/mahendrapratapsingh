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
          <a href="/mahendrapratapsingh/About">ABOUT</a>
        </div>
        <div className="header-item-container">
          <a href="/mahendrapratapsingh/Experience">JOURNEY</a>
        </div>
        <div className="header-item-container">
          <a href="/mahendrapratapsingh/Skills">SKILLS</a>
        </div>
        <div className="header-item-container">
          <a href="/mahendrapratapsingh/Projects">PROJECTS</a>
        </div>
      </div>
    </div>
  );
}
