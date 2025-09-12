import React from "react";
import "./UtilsContainer.scss";
import { UtilityItemsData } from "../../../mockdata/utilsdata";
import { useTheme } from "../../themecontext/ThemeContext";

export default function UtilsContainer() {
  const { isDark } = useTheme();
  return (
    <div className="utils-container">
      {UtilityItemsData.map((utilItem) => (
        <div className="utils-item" key={utilItem.id}>
          <span className={"title " + (isDark ? "titledarkmode" : "")}><utilItem.icon />&nbsp;{utilItem.title}</span>
          <h6>{utilItem.description}</h6>
          {utilItem.children && <utilItem.children />}
        </div>          
      ))}
    </div>
  );
}
