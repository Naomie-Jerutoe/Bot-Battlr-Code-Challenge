import React from "react";
import "./SortBar.css";

function SortBar({ onSortChange, onClassChange }) {
  return (
    <div>
      <div className="sort-bar">
        <label style={{ color: "white" }}>
          Sort Bots By:
          <select
            name="sort"
            id="sort"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
          </select>
        </label>
      </div>

      <div className="filter-bar">
        <label style={{ color: "white" }}>
          Filter Bots By Class:
          <select
            name="filter"
            id="filter"
            onChange={(e) => onClassChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="support">Support</option>
            <option value="medic">Medic</option>
            <option value="assault">Assault</option>
            <option value="defender">Defender</option>
            <option value="captain">Captain</option>
            <option value="witch">Witch</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default SortBar;
