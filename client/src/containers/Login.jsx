import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div className="App-formcontainer">
      <NavbarWhite />
      <div className={styles.container_login}>
        <div className={styles.img_container}></div>
        <div className={styles.login_form}>
          <h1 className="App-form-h1">Log in</h1>
          <LoginForm />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
