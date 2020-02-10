import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";

import LoginForm from "../components/auth/LoginForm";

const Login = () => {
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

  // return (
  //   <div>
  //     <NavbarWhite />
  //     <div className={styles.gFormPage_container}>
  //       <div className={styles.gImg_container}>
  //         <div className={styles.gImg_img}></div>
  //       </div>

  //       <h1 className={styles.gApp_form_h1}>Log in</h1>
  //       <div className={styles.gForm_container}>
  //         <LoginForm />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Login;
