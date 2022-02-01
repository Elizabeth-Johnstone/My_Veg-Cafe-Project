import React from "react";
import "./Login.css";

export default function Secret() {
  var userFirstName = localStorage.getItem("First name");

  return (
    <div id="login-form-body">
      <div className="login-form-container">
        <h1 className="login-title">
          We're happy to see you, {userFirstName}!
        </h1>
        <div className="login-img-container">
          <img className="login-img" src="/images/tea.jpg" alt="tea"></img>
        </div>
      </div>
    </div>
  );
}
