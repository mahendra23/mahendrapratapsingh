import React, { useState } from "react";
import { headerdata } from "../../mockdata/lightdesign/headerdata";
import "./Header.scss";
import { useTheme } from "../themecontext/ThemeContext";

// Toggle Switch component
const ToggleSwitch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-checked={isDark}
      />
      <span className="slider" />
    </label>
  );
};

export const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <nav id="header" className={`navbar ${isDark ? "dark" : ""}`}>
      {/* Left: Hamburger */}
      {!isDark && (
        <div className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>  
    )}

      {/* Right: Toggle */}
      <ToggleSwitch />

      {/* Navigation Drawer */}
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <div className="nav-list-item-container">
          {headerdata.header.map(
            (data) =>
              data.display && (
                <li className="nav-list-item" key={data.id}>
                  <a href={data.href} onClick={() => setMenuOpen(false)}>
                    {data.title}
                  </a>
                </li>
              )
          )}
        </div>
      </ul>
    </nav>
  );
};
