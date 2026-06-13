import React, { useState, useRef, useEffect } from "react";
import { headerdata } from "../../mockdata/lightdesign/headerdata";
import "./Header.scss";
import { useTheme } from "../themecontext/ThemeContext";

// Toggle Switch component
const ToggleSwitch = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <label className="toggle-switch" title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        aria-checked={isDark}
        aria-label="Theme toggle"
      />
      <span className="slider" />
    </label>
  );
};

export const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark } = useTheme();
  const hamburgerRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleHamburgerKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setMenuOpen(!menuOpen);
    }
  };

  const handleMenuItemClick = (href: string) => {
    setMenuOpen(false);
    // Smooth scroll to section if it's an anchor link
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav id="header" className={`navbar ${isDark ? "dark" : ""}`}>
      {/* Left: Hamburger */}
      {!isDark && (
        <div
          ref={hamburgerRef}
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={handleHamburgerKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}

      {/* Right: Toggle */}
      <ToggleSwitch />

      {/* Navigation Drawer */}
      <ul className={`nav-list ${menuOpen ? "open" : ""}`} role="navigation">
        <div className="nav-list-item-container">
          {headerdata.header.map(
            (data) =>
              data.display && (
                <li className="nav-list-item" key={data.id}>
                  <a
                    href={data.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(data.href);
                    }}
                  >
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
