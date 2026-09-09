import React, { useState } from "react";
import "./UtilsContainer.scss";
import { UtilityItemsData } from "../../../mockdata/utilsdata";

export default function UtilsContainer() {
  const [selectedId, setSelectedId] = useState(UtilityItemsData[0]?.id ?? "");

  const selectedUtil =
    UtilityItemsData.find((utilItem) => utilItem.id === selectedId) ?? UtilityItemsData[0];

  return (
    <div className="utils-container">
      <div className="utils-selector">
        <label htmlFor="util-selector">Select a utility</label>
        <select
          id="util-selector"
          value={selectedId}
          onChange={(event) => setSelectedId(event.target.value)}
          className="dark"
        >
          {UtilityItemsData.map((utilItem) => (
            <option key={utilItem.id} value={utilItem.id}>
              {utilItem.title}
            </option>
          ))}
        </select>
      </div>

      {selectedUtil && (
        <div className="utils-item">
          <span className="title titledarkmode">
            <selectedUtil.icon />&nbsp;{selectedUtil.title}
          </span>
          <h6>{selectedUtil.description}</h6>
          {selectedUtil.children && <selectedUtil.children />}
        </div>
      )}
    </div>
  );
}
