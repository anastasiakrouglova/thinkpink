import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Footer from "../components/Footer.jsx";
import { inject } from "mobx-react";
import RegisterForm from "../components/auth/RegisterForm";

const Signup = () => {

  return (
    <div className="App-formcontainer">
      <NavbarWhite />
      <div className={styles.container_login}>
        <div className={styles.img_container}></div>

        <div className={styles.signup_form}>
          <h1 className="App-form-h1">Registreer</h1>
          <p className="App-form-text">
            Deze informatie wordt gebruikt om het inschrijvingsproces zo vlot
            mogelijk te laten verlopen en voor de veiligheid tijdens het
            evenement. Je informatie wordt niet gedeeld met derden.
          </p>

          <RegisterForm />
          {/* 
          <div className={styles.container_date}>
            <div className="App-form-input-container">
              <label htmlFor="day" className={styles.label}>
                dag
              </label>
              <input
                required
                name="day"
                id="day"
                ref={dayInput}
                className={styles.input}
                placeholder="01"
                type="number"
                min="1"
                max="31"
              />
            </div>
            <div className="App-form-input-container">
              <label htmlFor="month" className={styles.label}>
                maand
              </label>
              <input
                required
                name="month"
                id="month"
                ref={monthInput}
                className={styles.input}
                placeholder="02"
                type="number"
                min="1"
                max="12"
              />
            </div>
            <div className="App-form-input-container">
              <label htmlFor="year" className={styles.label}>
                jaar
              </label>
              <input
                required
                name="year"
                id="year"
                ref={yearInput}
                className={styles.input}
                placeholder="*****"
                type="number"
                min="1900"
                max="2500"
              />
            </div>
          </div>

          */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default inject(`uiStore`)(Signup);
