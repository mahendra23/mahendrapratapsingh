import React, { useEffect, useState } from "react";
import UtilsSection from "../utils/UtilsSection";
import { MPLogo } from "./MPLogo";

export default function UtilsToggleWrapper() {
  const [showUtils, setShowUtils] = useState(false);

  useEffect(() => {
    // Enable Utils by default if running locally
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      setShowUtils(true);
    }
  }, []);

  const clickCountRef = React.useRef(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    clickCountRef.current += 1;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (clickCountRef.current === 1) {
        // ✅ single click → scroll
        const section = document.getElementById("aboutsection");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else if (clickCountRef.current >= 3) {
        // ✅ triple click → run callback
        setShowUtils((prev) => !prev);
      }
      clickCountRef.current = 0;
    }, 400); // 400ms window
  };

  return (
    <div>
      <MPLogo onClick={handleClick} />
      {showUtils && <UtilsSection />}
    </div>
  );
}