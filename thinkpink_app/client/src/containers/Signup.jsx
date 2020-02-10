import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject } from "mobx-react";
import RegisterForm from "../components/auth/RegisterForm";

const Signup = ({ uiStore }) => {
  const firstnameInput = React.createRef()
  const lastnameInput = React.createRef()
  const emailInput = React.createRef()
  const pwdInput = React.createRef()
  const dayInput = React.createRef()
  const monthInput = React.createRef()
  const yearInput = React.createRef()
  const countryNumberInput = React.createRef()
  
  
  return (
      <div className="App-formcontainer">
        
      <NavbarWhite />
      <div className={styles.container_signup}>
      <div className={styles.img_container}></div>
      
      <div>
      <h1 className="App-form-h1">Registreer - {uiStore.role}</h1>
        <p className="App-form-text">Deze informatie wordt gebruikt om het inschrijvingsproces zo vlot mogelijk te laten verlopen en voor de veiligheid tijdens het evenement. 
        Je informatie wordt niet gedeeld met derden.</p>

        <RegisterForm />  
        <button className={styles.label}><img src="../assets/images/icons/fotobutton.svg" alt="foto"/> Voeg een foto van jezelf toe</button>
          
        <div className={styles.name_container}>
          <div className="App-form-input-container">
            <label htmlFor="firstname" className={styles.label}>Voornaam</label>
            <input required name="firstname" id="firstname" ref={firstnameInput} className={styles.input} placeholder="John" type="text" />
          </div>
        
          <div className="App-form-input-container">
              <label htmlFor="lastname" className={styles.label}>Familienaam</label>
              <input required name="lastname" id="lastname" ref={lastnameInput} className={styles.input} placeholder="Doe" type="text" />
          </div>
        </div>
      

        <div className="App-form-input-container">
          <label htmlFor="email" className={styles.label}>E-mailadres</label>
          <input required name="email" id="email" ref={emailInput} className={styles.input} placeholder="johndoe@gmail.com" type="email" />
        </div>

        <div className="App-form-input-container">
          <label htmlFor="pwd" className={styles.label}>Wachtwoord</label>
          <input required name="pwd" id="pwd" ref={pwdInput} className={styles.input} placeholder="*****" type="password" />
        </div>

        <div className={styles.container_date}>
          <div className="App-form-input-container">
            <label htmlFor="day" className={styles.label}>dag</label>
            <input required name="day" id="day" ref={dayInput} className={styles.input} placeholder="01" type="number" min="1" max="31" />
          </div>
          <div className="App-form-input-container">
            <label htmlFor="month" className={styles.label}>maand</label>
            <input required name="month" id="month" ref={monthInput} className={styles.input} placeholder="02" type="number"  min="1" max="12" />
          </div>
          <div className="App-form-input-container">
            <label htmlFor="year" className={styles.label}>jaar</label>
            <input required name="year" id="year" ref={yearInput} className={styles.input} placeholder="*****" type="number" min="1900" max="2500" />
          </div>
        </div>

        <div>
          <div className="App-form-input-container">
          <label htmlFor="countryNumber" className={styles.label}>Telefoonnummer (optioneel)</label>
            <div>
              <select className={styles.selectCountry} name="numberCountry" id="numberCountry">
                <option value="numberCountry">🇧🇪(+32)</option>
                <option value="numberCountry">🇨🇮(+39)</option>
                <option value="numberCountry">🇷🇺(+7)</option>
                <option value="numberCountry">🇬🇧(+44)</option>
                <option value="numberCountry">🇪🇸(+34)</option>
              </select>
            <input name="countryNumber" id="countryNumber" ref={countryNumberInput} className={styles.input} placeholder="38 92 84 72" type="password" />
            </div>
          </div> 
        </div>

        <div className="App-form-input-container">
            <label htmlFor="year" className={styles.label}>T-shirt maat</label>
          <div>
            
            <input className={styles.radioInput} type="radio" name="size" id="xs" />
            <label className={styles.radioLabel} htmlFor="xs">xs</label>
            
            
            <input className={styles.radioInput} type="radio" name="size" id="s" />
            <label className={styles.radioLabel} htmlFor="s">s</label>
            
            
            <input className={styles.radioInput}  type="radio" name="size" id="m" />
            <label className={styles.radioLabel} htmlFor="m">m</label>
            
            
            <input className={styles.radioInput}  type="radio" name="size" id="l" />
            <label className={styles.radioLabel} htmlFor="l">l</label>

            
            <input className={styles.radioInput}  type="radio" name="size" id="xl" />
            <label className={styles.radioLabel} htmlFor="xl">xl</label>

            
            <input className={styles.radioInput}  type="radio" name="size" id="xxl" />
            <label className={styles.radioLabel} htmlFor="xxl">xxl</label>

            </div>
        </div>

        <div className={styles.akkoord_container}>
          <input required name="akkoord" id="akkoord" type="checkbox" />
          
          <label htmlFor="akkoord">Ik ga akkoord met de <a className={styles.underlined} href="">algemene voorwaarden</a> en het <a className={styles.underlined} href="">loopreglement</a></label>
        </div>
        
        <div className={styles.buttonContainer}>
        <NavLink className={styles.secundair_button} to={ROUTES.login}>Log in</NavLink>
        <input className="App-button_secundair" type="submit" value="Sign Up"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default inject(`uiStore`)(Signup);