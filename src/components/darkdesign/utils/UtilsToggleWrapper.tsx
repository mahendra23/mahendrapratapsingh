import React, { useState } from "react";
import { MPInitialsIcon } from "../initialsicon/MPInitialsIcon";
import UtilsSection from "../utils/UtilsSection";

export default function UtilsToggleWrapper() {
  const [showUtils, setShowUtils] = useState(false);

  const handleTripleClick = () => {
    setShowUtils((prev) => !prev);
  };

  return (
    <div>
      <MPInitialsIcon onTripleClick={handleTripleClick} scrollToId="aboutsection" />
      {showUtils && <UtilsSection />}
    </div>
  );
}
