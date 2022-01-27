import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:4000/login", values)
      .then((res) => {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("firstName", res.data.name);
        props.logFunction();
        // navigate("/secret");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be longer than 8 Characters.";
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <body id="form-body">
      <div className="form-container">
        <h1 className="title">Log in</h1>
        <form action="#" className="form" onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <div className="input-box">
              <span className="details">Username</span>
              <input
              className="input-text" 
                type="text"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Enter your username"
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
              />
            </div>
          </div>
          <div className="button">
          <input className="input-text"  type="submit" disabled={!formik.isValid}/>
          </div>
        </form>
      </div>
    </body>
  );
}
