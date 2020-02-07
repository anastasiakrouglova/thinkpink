import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const emailInput = React.createRef()
  const pwdInput = React.createRef()
  
  const handleSubmit = e => {
    e.preventDefault();
    // authStore
    //   .login(emailInput.current.value, pwdInput.current.value)
    //   .then(() => {
    //     history.push(ROUTES.login)
    //   })
  }
  return (
      <div className="App-formcontainer">
      <NavbarWhite />

      

      <div className={styles.container_signup}>
        <div className="App-img_form"></div>

        <div>
          <h1 className="App-form-h1">Log in</h1>

          <LoginForm />
        </div>
      </div>   
    </div>
  );
};

export default Login;