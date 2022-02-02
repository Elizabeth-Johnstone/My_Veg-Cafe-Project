import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Deployment.js"

export default function SignUp(props) {
  let navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    axios
      .post(`${baseURL}/signup`, values)
      .then((res) => {
        localStorage.setItem("ID", res.data[0][0].user_id);
        localStorage.setItem("First name", res.data[0][0].firstname);
        localStorage.setItem("Last name", res.data[0][0].lastname);
        localStorage.setItem("Username", res.data[0][0].username);
        localStorage.setItem("E-mail", res.data[0][0].email);
        alert("Account successfully created");
        props.logFunction();
        navigate("/signup");
      })
      .catch(() => alert("Account already exists!"));
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "*First name required";
    }
    if (!values.lastName) {
      errors.lastName = "*Last name required";
    }
    if (!values.username) {
      errors.username = "*Username required";
    }
    if (!values.email) {
      errors.email = "*E-mail required";
    } else if (!values.email.includes("@") || !values.email.includes(".")) {
      errors.email = "*Please enter a valid email";
    }
    if (!values.password) {
      errors.password = "*Password required";
    } else if (values.password.length < 8) {
      errors.password = "*Password must be longer than 8 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "*Please confirm password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "*Passwords must match";
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
        <h1 className="login-title">Create an account with us</h1>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <div className="login-input-container">
            <div className="login-input-box">
              <span className="login-details">First Name</span>
              <input
                className="login-input-text"
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="login-input-box">
              <span className="login-details">Last Name</span>
              <input
                className="login-input-text"
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="login-input-box">
              <span className="login-details">Username</span>
              <input
                className="login-input-text"
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="login-input-box">
              <span className="login-details">E-mail</span>
              <input
                className="login-input-text"
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your e-mail address"
                required
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
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="login-input-box">
              <span className="login-details">Confirm Password</span>
              <input
                className="login-input-text"
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
          <div className="login-button">
            <input
              className="login-input-text"
              type="submit"
              value="Register"
              disabled={!formik.isValid}
            />
          </div>
        </form>
        <div className="signup-errors">
          {formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          {formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
