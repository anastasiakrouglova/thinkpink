import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

import FormInput from "../components/FormInput.jsx"

const Login = () => {
  return (
      <div className="App-formcontainer">
        <NavbarWhite />
        <h1 className="App-form-h1">Log in</h1>

          <FormInput/>
          
    </div>
  );
};

export default Login;