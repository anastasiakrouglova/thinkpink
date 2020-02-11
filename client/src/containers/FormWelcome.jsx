import React from "react";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { inject, observer } from "mobx-react";

import { steps } from '../components/steps/steps.js'
import MultiStep from '../components/steps/index'
import withAuthentication from "../components/auth/WithAuthentication.jsx";

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

export default inject(`uiStore`) (withAuthentication(observer(FormWelcome)));
