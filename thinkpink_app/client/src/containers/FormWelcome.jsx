import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

import FormInput from "../components/FormInput.jsx"

const Login = () => {
  
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
            <h1 className="App-form-h1">Hi Rita!</h1>
                  <p className="App-body">Creëer een pagina als een lotgenoot!</p>
                  <p className="App-body">Aangezien je borstkanker hebt overleefd, word je extra in de bloemetjes gezet op race for the cure. Je zult een heel team achter je krijgen die voor je lopen. Om dit allemaal te managen zul je een pagina toegestuurd krijgen die je kan managen. Daarop zal je ook het aantal supporters zien en mensen die voor jouw team willen doneren!</p>

          <div className={styles.buttonContainer}>
            <NavLink className="App-button_secundair-outline" to={ROUTES.signup}>&#8592; Terug</NavLink>
            <NavLink className="App-button_secundair" to={ROUTES.signup}>Volgende</NavLink>
          </div>

        </form>
      </div>   
    </div>
  );
};

export default Login;