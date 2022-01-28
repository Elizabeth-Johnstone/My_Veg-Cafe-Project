import React from "react";
import "./Login.css";

export default function Secret() {
  var userFirstName = localStorage.getItem("First name");

  return (
    <div id="form-body">
      <div className="form-container">
        <h1 className="title-log-in">
          We're happy to see you, {userFirstName}!
        </h1>
        <div className="img-container">
          <img className="tea-img" src="/images/tea.jpg" alt="tea"></img>
        </div>
      </div>
    </div>
  );
}
