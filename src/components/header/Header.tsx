import React, { ReactElement, useState } from 'react';
import {headerdata} from '../../mockdata/headerdata';
import "./Header.scss";

export default function Header(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav id="header" className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        <div className="list-item-container">
          {headerdata.header.map((data) => (
              <li className="nav-list-item" key={data.id}>
                <a href={data.href}>{data.title}</a>
              </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}