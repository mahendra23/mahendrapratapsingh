import React, { useState } from "react";
import UtilsSection from "../utils/UtilsSection";
import { MPLogo } from "./MPLogo";

export default function UtilsToggleWrapper() {
  const [showUtils, setShowUtils] = useState(false);
  const clickCountRef = React.useRef(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    clickCountRef.current += 1;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (clickCountRef.current >= 5) {
        setShowUtils(true);
        document.getElementById("utilssection")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        setShowUtils(false);
      }
      clickCountRef.current = 0;
    }, 500);
  };

  return (
    <div>
      <MPLogo onClick={handleClick} />
      {/* {!showUtils ? <AboutSection /> : <UtilsSection />} */}
      {showUtils && <UtilsSection />}
    </div>
  );
}