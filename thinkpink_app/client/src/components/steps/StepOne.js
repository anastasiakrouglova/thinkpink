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
    <div className={styles.form_container}>
       <div>
         <section >
           {store.uiStore.role === `lotgenoot` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina als een lotgenoot!</p>
               <p className={styles.form_textWelcome}>
                 Aangezien je borstkanker hebt overleefd, word je extra in de
                 bloemetjes gezet op race for the cure. Je zult een heel team
                 achter je krijgen die voor je lopen. Om dit allemaal te managen
                 zul je een pagina toegestuurd krijgen die je kan managen. Daarop
                 zal je ook het aantal supporters zien en mensen die voor jouw
                 team willen doneren!
               </p>
               <p className={styles.form_change}>Wil je toch niet inschrijven als lotgenoot? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">teamcaptain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' op Race For The Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
              </>
           ) : store.uiStore.role === `teamcaptain` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina voor een lotgenoot!</p>
               <p className={styles.form_textWelcome}>
                 We bieden je de mogelijkheid om een pagina aan te maken voor een
                 lotgenoot of voor iemand die jammer genoeg de strijd heeft
                 verloren. Wees op je hoede dat je de toestemming nodig hebt van
                 de lotgenoot zelf om een pagina aan te maken. Zo niet, zal de
                 pagina worden verwijderd.
               </p>
               <p className={styles.form_change}>Wil je toch niet inschrijven als teamcaptain? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">teamcaptain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race For The Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
               </>
           ) : store.uiStore.role === `supporter` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">
                 Leuk dat je wilt meelopen in Race For The Cure!
               </p>
               <p className={styles.form_textWelcome}>
                Haal je grootste
                spandoeken uit de kast en zet de lotgenoot waarvoor je loopt
                extra in de bloemetjes op Race For The Cure!
               </p>
               <p className={styles.form_change}>Wil je toch niet inschrijven als supporter? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">teamcaptain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race For The Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
             </>
           ) : store.uiStore.role === `group` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Registreer meerdere mensen!</p>
               <p className={styles.form_textWelcome}>
                 We bieden je de mogelijkheid om een pagina aan te maken voor een
                 lotgenoot of voor iemand die jammer genoeg de strijd heeft
                 verloren. Wees op je hoede dat je de toestemming nodig hebt van
                 de lotgenoot zelf om een pagina aan te maken. Zo niet, zal de
                 pagina worden verwijderd.
               </p>
               <p className={styles.form_change}>Wil je toch niet inschrijven als groep? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">teamcaptain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race For The Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
             </>
           ) : (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Eerst en vooral willen we graag weten welke rol je wilt hebben in Race For The Cure omdat dit belangrijk is voor het invulformulier.<br/> </p>
               
               <p className={styles.form_pinkText}>(Deze informatie zal niet publiekelijk weergeven worden of verkocht aan derde partijen)</p>
               
                                            
                <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">teamcaptain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race For The Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p> 
             </>
           )}
         </section> 
       </div>
     </div>
    )
  }
}