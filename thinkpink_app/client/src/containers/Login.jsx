import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

import FormInput from "../components/FormInput.jsx"

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

        <form action="">
          <h1 className="App-form-h1">Log in</h1>

          <div className="App-form-input-container">
              <label htmlFor="email" className={styles.label}>E-mailadres</label>
              <input required name="email" id="email" ref={emailInput} className={styles.input} placeholder="Johndoe@gmail.com" type="email" />
          </div>


          <div className="App-form-input-container">
              <label htmlFor="pwd" className={styles.label}>Password</label>
              <input required name="pwd" id="pwd" ref={pwdInput} className={styles.input} placeholder="*****" type="password" />
          </div>

          <div className={styles.buttonContainer}>
            <NavLink className={styles.secundair_button} to={ROUTES.signup}>Sign up</NavLink>
            <input className="App-button_secundair" type="submit" value="Log in"/>
          </div>

        </form>
      </div>   
    </div>
  );
};

export default Login;