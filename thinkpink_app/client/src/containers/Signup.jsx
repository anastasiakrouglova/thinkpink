import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

import FormInput from "../components/FormInput.jsx"

const Signup = () => {
  return (
      <div className="App-formcontainer">
        
        <NavbarWhite />
        <h1 className="App-form-h1">Sign Up</h1>
        <p className="App-form-text">We gebruiken deze informatie om het inschrijvingsproces zo vlot mogelijk te laten verlopen en voor de veiligheid tijdens het evenement. Uw informatie wordt niet gedeeld met andere partijen.</p>

          <FormInput/>
          
    </div>
  );
};

export default Signup;