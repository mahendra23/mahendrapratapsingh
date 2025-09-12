import React from "react";
import "./MPInitialsIcon.scss";
import { MY_LOGO } from "../../../common/constants";

interface MPInitialsIconProps {
  onTripleClick?: () => void;
  scrollToId: string;
}

export const MPInitialsIcon: React.FC<MPInitialsIconProps> = ({ 
  onTripleClick, 
  scrollToId
}) => {
  const clickCountRef = React.useRef(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    clickCountRef.current += 1;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (clickCountRef.current === 1 && scrollToId) {
        // ✅ single click → scroll
        const section = document.getElementById(scrollToId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else if (clickCountRef.current >= 3 && onTripleClick) {
        // ✅ triple click → run callback
        onTripleClick();
      }
      clickCountRef.current = 0;
    }, 400); // 400ms window
  };

  return (
    <button className="mp-initials-icon" onClick={handleClick} title={"Icon"}>
      <img src={MY_LOGO} alt={"MP-LOGO"} className="mp-initials-icon-img" />
    </button>
  );
};
