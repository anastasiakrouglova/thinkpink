'use strict'
import React from 'react'
import styles from "../../containers/Signup.module.css";
import store from '../../store/index'
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

export class StepOne extends React.Component {
  constructor () {
    super()
  }


    render() {
    console.log(store.uiStore.role);

    const chooseRole = React.createRef();

    const handleChooseRole = () => {
      let myRole = chooseRole.current.value;
      store.uiStore.role = myRole;
  
      console.log(store.uiStore.role);
    }

    return (
    <div className="App-formcontainer">
       {/* <NavbarWhite /> */}
       {/* <MultiStep steps={steps} /> */}

       <div className={styles.container_signup}>
         <div className="App-img_form"></div>

         <section>
           {store.uiStore.role === `lotgenoot` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina als een lotgenoot!</p>
               <p className="App-body">
                 Aangezien je borstkanker hebt overleefd, word je extra in de
                 bloemetjes gezet op race for the cure. Je zult een heel team
                 achter je krijgen die voor je lopen. Om dit allemaal te managen
                 zul je een pagina toegestuurd krijgen die je kan managen. Daarop
                 zal je ook het aantal supporters zien en mensen die voor jouw
                 team willen doneren!
               </p>
             </>
           ) : store.uiStore.role === `teamcaptain` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina voor een lotgenoot!</p>
               <p className="App-body">
                 We bieden je de mogelijkheid om een pagina aan te maken voor een
                 lotgenoot of voor iemand die jammer genoeg de strijd heeft
                 verloren. Wees op je hoede dat je de toestemming nodig hebt van
                 de lotgenoot zelf om een pagina aan te maken. Zo niet, zal de
                 pagina worden verwijderd.
               </p>
             </>
           ) : store.uiStore.role === `supporter` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">
                 Leuk dat je wilt meelopen in Race For The Cure!
               </p>
               <p className="App-body">
                 Jij mag mee gaan lopen voor dit team, zo leuk! Haal je grootste
                 spandoeken uit de kast en zet de lotgenoot waarvoor je loopt
                 extra in de bloemetjes op Race For The Cure!
               </p>
             </>
           ) : store.uiStore.role === `group` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Registreer meerdere mensen!</p>
               <p className="App-body">
                 We bieden je de mogelijkheid om een pagina aan te maken voor een
                 lotgenoot of voor iemand die jammer genoeg de strijd heeft
                 verloren. Wees op je hoede dat je de toestemming nodig hebt van
                 de lotgenoot zelf om een pagina aan te maken. Zo niet, zal de
                 pagina worden verwijderd.
               </p>
             </>
           ) : (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Eerst en vooral moet je zeggen welke rol je wilt hebben in Race For The Cure:</p>
                 <select onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">teamcaptain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met grote groep</option>
               </select> 
             </>
           )}

           {/* <div className={styles.buttonContainer}>
             <NavLink className="App-button_secundair-outline" to={ROUTES.login}>
               &#8592; Terug
             </NavLink>
             <NavLink className="App-button_secundair" to={ROUTES.forminfo}>
               Volgende
             </NavLink>
           </div> */}
         </section> 
       </div>
     </div>
    )
  }
}