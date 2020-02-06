import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject } from "mobx-react";

import FormInput from "../components/FormInput.jsx"

const Signup = ({ raceStore }) => {
  const firstnameInput = React.createRef()
  const lastnameInput = React.createRef()
  const emailInput = React.createRef()
  const pwdInput = React.createRef()
  const dayInput = React.createRef()
  const monthInput = React.createRef()
  const yearInput = React.createRef()
  
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
      <form onSubmit={handleSubmit}>
      <h1 className="App-form-h1">Sign Up - {raceStore.role}</h1>
        <p className="App-form-text">We gebruiken deze informatie om het inschrijvingsproces zo vlot mogelijk te laten verlopen en voor de veiligheid tijdens het evenement. Uw informatie wordt niet gedeeld met andere partijen.</p>

        <div className={styles.name_container}>
          <div className="App-form-input-container">
            <label htmlFor="firstname" className={styles.label}>Voornaam</label>
            <input name="firstname" id="firstname" ref={firstnameInput} className={styles.input} placeholder="John" type="text" />
          </div>
        
          <div className="App-form-input-container">
              <label htmlFor="lastname" className={styles.label}>Familienaam</label>
              <input name="lastname" id="lastname" ref={lastnameInput} className={styles.input} placeholder="Doe" type="text" />
          </div>
        </div>
      

        <div className="App-form-input-container">
          <label htmlFor="email" className={styles.label}>Email</label>
          <input name="email" id="email" ref={emailInput} className={styles.input} placeholder="johndoe@gmail.com" type="email" />
        </div>

        <div className="App-form-input-container">
          <label htmlFor="pwd" className={styles.label}>Wachtwoord</label>
          <input name="pwd" id="pwd" ref={pwdInput} className={styles.input} placeholder="*****" type="password" />
        </div>

        <div className={styles.container_date}>
          <div className="App-form-input-container">
            <label htmlFor="day" className={styles.label}>day</label>
            <input name="day" id="day" ref={dayInput} className={styles.input} placeholder="01" type="number" min="1" max="31" />
          </div>
          <div className="App-form-input-container">
            <label htmlFor="month" className={styles.label}>month</label>
            <input name="month" id="month" ref={monthInput} className={styles.input} placeholder="02" type="number"  min="1" max="12" />
          </div>
          <div className="App-form-input-container">
            <label htmlFor="year" className={styles.label}>year</label>
            <input name="year" id="year" ref={yearInput} className={styles.input} placeholder="*****" type="number" min="1900" max="2500" />
          </div>
        </div>


        <div>
          <p>
</p>
          <select name="numberCountry" id="numberCountry">
            <option value="numberCountry">🇧🇪(+32)</option>
            <option value="numberCountry">🇨🇮(+39)</option>
            <option value="numberCountry">🇷🇺(+7)</option>
            <option value="numberCountry">🇬🇧(+44)</option>
            <option value="numberCountry">🇪🇸(+34)</option>
          </select>
          <div className="App-form-input-container">
            <label htmlFor="pwd" className={styles.label}>Wachtwoord</label>
            <input name="pwd" id="pwd" ref={pwdInput} className={styles.input} placeholder="*****" type="password" />
          </div>
          
        </div>



        <input type="submit"/>

      </form>
    </div>
  );
};

export default inject(`raceStore`)(Signup);