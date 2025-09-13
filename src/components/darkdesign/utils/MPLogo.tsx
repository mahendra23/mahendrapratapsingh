import React, { useEffect, useState } from "react";
import "./MPLogo.scss";
import { MY_LOGO } from "../../../common/constants";

interface MPLogoProps {
  onClick:(event: React.MouseEvent) => void;
}

export const MPLogo: React.FC<MPLogoProps> = ({onClick}) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down -> hide
        setShow(false);
      } else {
        // scrolling up -> show
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <button className={`mp-initials-icon ${show ? "show" : "hide"}`} onClick={onClick}>
      <img src={MY_LOGO} alt="MP Logo" className="mp-initials-icon-img" />
    </button>
  );
}
