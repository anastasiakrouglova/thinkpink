import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, PropTypes, observer } from "mobx-react";

import { steps } from '../components/steps/steps.js'
import MultiStep from 'react-multistep'

const FormWelcome = ({ uiStore }) => {

  const chooseRole = React.createRef();

  const handleChooseRole = () => {
    let myRole = chooseRole.current.value;
    uiStore.role = myRole;

    console.log(uiStore.role);
  }


  const handleSubmit = e => {
    e.preventDefault();
    // authStore
    //   .login(emailInput.current.value, pwdInput.current.value)
    //   .then(() => {
    //     history.push(ROUTES.login)
    //   })
  };
  return (
    <div className="App-formcontainer">
      <NavbarWhite />
      <MultiStep steps={steps} />
    </div>
  );
};

export default inject(`uiStore`)(observer(FormWelcome));
