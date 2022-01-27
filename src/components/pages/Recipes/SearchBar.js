import React, { useState } from "react";
import "../../../App.css";
import "./Cards.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-container">
      <input
        className="search-recipes"
        type="text"
        placeholder="Search for a recipe..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
  );
}
