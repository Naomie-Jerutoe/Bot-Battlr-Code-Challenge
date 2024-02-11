import React from "react";
import "./SortBar.css";

function SortBar({ onSortChange }) {
  return (
    <div className="sort-bar">
      <label>
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
  );
}

export default SortBar;
