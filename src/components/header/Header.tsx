import React, { useState } from 'react';
import {headerdata} from "../../mockdata/headerdata";
import "./Header.scss";
import {DownloadResumeButton} from "../resume/DownloadResumeButton";

export const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav id="header" className="navbar">
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <div className="nav-list-item-container">
          {headerdata.header.map((data) => (
              data.display && <li className="nav-list-item" key={data.id}>
                <a href={data.href} onClick={() => setMenuOpen(!menuOpen)}>{data.title}</a>
              </li>
          ))}
          <li className="nav-list-item" key={headerdata.header.length}>
            <DownloadResumeButton buttonTitle="Download Resume" showIcon={true}/>
          </li>
        </div>
      </ul>
    </nav>
  );
};