import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../App.css";
import "./Cards.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/recipes")
      .then((res) => {
        console.log(res.data[0]);
        setUsers(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

      <ul>
        {users
          .filter((user) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((users) => (
            <li key={users.id}>{users.firstname}</li>
          ))}
      </ul>
    </div>
  );
}
