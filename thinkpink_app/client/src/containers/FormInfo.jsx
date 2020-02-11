import React from "react";
import styles from "./Signup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, PropTypes, observer } from "mobx-react";

const FormInfo = ({ uiStore, history }) => {

  const chooseRole = React.createRef();

  const handleChooseRole = () => {
    let myRole = chooseRole.current.value;
    uiStore.role = myRole;

    console.log(uiStore.role);
  }

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="App-formcontainer">
      <NavbarWhite />

      <div className={styles.container_signup}>
        <div className="App-img_form"></div>

        <section>
          {uiStore.role === `lotgenoot` ? (
            <>
              {/* <h1 className="App-form-h1">Hi {uiStore.role}!</h1> */}
              <h1 className="App-form-h1">Is dit juist? De foto zal gebruikt worden
                als teamfoto</h1>
              <p className="App-body">
                Aangezien je borstkanker hebt overleefd, word je extra in de
                bloemetjes gezet tijdens Race for the Cure. Je zal een heel team
                achter je krijgen die voor je lopen. Om dit allemaal te beheren
                zul je een pagina toegestuurd krijgen. Daarop
                zal je ook het aantal supporters zien en mensen die voor jouw
                team willen doneren!
              </p>
            </>
          ) : uiStore.role === `teamcaptain` ? (
            <>
              <h1 className="App-form-h1">Hi {uiStore.role}!</h1>
              <p className="App-body">Creëer een pagina voor een lotgenoot!</p>
              <p className="App-body">
                De mogelijkheid bestaat om een pagina aan te maken voor een
                lotgenoot of voor iemand die jammer genoeg de strijd heeft
                verloren. Wees op je hoede dat je de toestemming nodig hebt van
                de lotgenoot zelf om een pagina aan te maken. Zo niet, zal de
                pagina worden verwijderd.
              </p>
            </>
          ) : uiStore.role === `supporter` ? (
            <>
              <h1 className="App-form-h1">Hi {uiStore.role}!</h1>
              <p className="App-body">
                Leuk dat je wilt meelopen in Race For The Cure!
              </p>
              <p className="App-body">
                Jij mag mee gaan lopen voor dit team, zo leuk! Haal je grootste
                spandoeken uit de kast en zet de lotgenoot waarvoor je loopt
                extra in de bloemetjes op Race for the Cure!
              </p>
            </>
          ) : uiStore.role === `group` ? (
            <>
              <h1 className="App-form-h1">Hallo {uiStore.role}!</h1>
              <p className="App-body">Registreer meerdere mensen!</p>
              <p className="App-body">
                De mogelijkheid bestaat om een pagina aan te maken voor een
                lotgenoot of voor iemand die jammer genoeg de strijd heeft
                verloren. Wees op je hoede dat je de toestemming nodig hebt van
                de lotgenoot zelf om een pagina aan te maken. Zo niet, zal de
                pagina worden verwijderd.
              </p>
            </>
          ) : (
              history.push(ROUTES.formwelcome)
          )}

          <div className={styles.buttonContainer}>
            <NavLink className="App-button_secundair-outline" to={ROUTES.login}>
              &#8592; Terug
            </NavLink>
            <NavLink className="App-button_secundair" to={ROUTES.forminfo}>
              Volgende
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default inject(`uiStore`)(observer(FormInfo));