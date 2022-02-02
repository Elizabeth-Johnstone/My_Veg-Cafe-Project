import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
// import { baseURL } from "../../Deployment.js"
export const baseURL = window.location.origin

export default function Login(props) {
  let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post(`${baseURL}/api/login`, values)
      .then((res) => {
        localStorage.setItem("ID", res.data.id);
        localStorage.setItem("First name", res.data.firstname);
        localStorage.setItem("Last name", res.data.lastname);
        localStorage.setItem("Username", res.data.username);
        localStorage.setItem("E-mail", res.data.email);
        props.logFunction();
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "*Username Required";
    }
    if (!values.password) {
      errors.password = "*Password Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div id="login-form-body">
      <div className="login-form-container">
        <h1 className="login-title">Log in</h1>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="login-input-container">
            <div className="login-input-box">
              <span className="login-details">Username</span>
              <input
                className="login-input-text"
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Enter username"
              />
            </div>
            <div className="login-input-box">
              <span className="login-details">Password</span>
              <input
                className="login-input-text"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="login-button">
            <input
              className="login-input-text"
              type="submit"
              disabled={!formik.isValid}
            />
          </div>
        </form>
        <div className="login-errors">
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
      </div>
    </div>
  );
}