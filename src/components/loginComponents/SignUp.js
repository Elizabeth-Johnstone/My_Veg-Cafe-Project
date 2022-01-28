import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import "./Login.css";

export default function SignUp() {
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
      .post("http://localhost:4000/signup", values)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("ID", res.data[0][0].id);
        localStorage.setItem("First name", res.data[0][0].firstname);
        localStorage.setItem("Last name", res.data[0][0].lastname);
        localStorage.setItem("Username", res.data[0][0].username);
        localStorage.setItem("E-mail", res.data[0][0].email);
        alert('Account successfully created')
      })
      .catch((err) => alert(err.response.data));
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
    } else if (!values.email.includes('@') || !values.email.includes('.')) {
      errors.email = "*Please enter a valid email"
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
    <div id="form-body">
      <div className="form-container">
        <h1 className="title-log-in">Create an account with us</h1>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <div className="input-box">
              <span className="details">First Name</span>
              <input
                className="input-text"
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input
                className="input-text"
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Username</span>
              <input
                className="input-text"
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">E-mail</span>
              <input
                className="input-text"
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your e-mail address"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                className="input-text"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                className="input-text"
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
          <div className="button">
            <input
              className="input-text"
              type="submit"
              value="Register"
              disabled={!formik.isValid}
            />
          </div>
        </form>
        <div className="errors-sign-up">
          {formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          {formik.errors.confirmPassword ? (<div>{formik.errors.confirmPassword}</div>) : null}
        </div>
      </div>
    </div>
  );
}
