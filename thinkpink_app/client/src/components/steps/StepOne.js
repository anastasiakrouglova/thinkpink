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
               <h1 className="App-form-h1">Hallo {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina als een lotgenoot!</p>
               <p className={styles.form_textWelcome}>
                 Aangezien je borstkanker hebt overleefd, word je extra in de
                 bloemetjes gezet op Race for the Cure. Je zal een heel team
                 achter je krijgen die voor je loopt. Om dit allemaal te beheren
                 zul je een pagina toegestuurd krijgen. Daarop worden het aantal supporters getoond en kan je zien wie aan jouw team doneert!
               </p>
               <p className={styles.form_change}>Wil je toch niet inschrijven als lotgenoot? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">Team Captain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' op Race for the Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
              </>
           ) : store.uiStore.role === `teamcaptain` ? (
             <>
               <h1 className="App-form-h1">Hallo {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina voor een lotgenoot!</p>
               <p className={styles.form_textWelcome}>
                 De mogelijkheid bestaat om een pagina aan te maken voor een
                 lotgenoot of voor iemand die jammer genoeg de strijd heeft
                 verloren. Wees op je hoede dat je de toestemming nodig hebt van
                 de lotgenoot zelf om een pagina aan te maken. Zo niet, dan zal de
                 pagina worden verwijderd.
               </p>
               <p className={styles.form_change}>Wil je je toch niet inschrijven als Team Captain? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                        <option value="teamcaptain">Team Captain</option>
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race for the Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
               </>
           ) : store.uiStore.role === `supporter` ? (
             <>
               <h1 className="App-form-h1">Hallo {store.uiStore.role}!</h1>
               <p className="App-body">
                 Leuk dat je wilt meelopen in Race for the Cure!
               </p>
               <p className={styles.form_textWelcome}>
                Haal je grootste
                spandoeken uit de kast en zet de lotgenoot waarvoor je loopt
                extra in de bloemetjes op Race for the Cure!
               </p>
               <p className={styles.form_change}>Wil je je toch niet inschrijven als supporter? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                        <option value="supporter">supporter</option>
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">Team Captain</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race for the Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
             </>
           ) : store.uiStore.role === `group` ? (
             <>
               <h1 className="App-form-h1">Hallo {store.uiStore.role}!</h1>
               <p className="App-body">Registreer meerdere mensen!</p>
               <p className={styles.form_textWelcome}>
                 De mogelijkheid bestaat om een pagina aan te maken voor een
                 lotgenoot of voor iemand die jammer genoeg de strijd heeft
                 verloren. Wees op je hoede dat je de toestemming nodig hebt van
                 de lotgenoot zelf om een pagina aan te maken. Zo niet, dan zal de
                 pagina worden verwijderd.
               </p>
               <p className={styles.form_change}>Wil je je toch niet inschrijven als groep? Verander het hier!</p>
               <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                        <option value="group">inschrijving met meerdere mensen</option>
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">Team Captain</option>
                         <option value="supporter">supporter</option>
                         
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race for the Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p>
             </>
           ) : (
             <>
               <h1 className="App-form-h1">Hallo {store.uiStore.role}!</h1>
               <p className="App-body">Duid je rol aan in het hele gebeuren van Race for the Cure. Dit belangrijk is voor het invulformulier.<br/> </p>
               
               <p className={styles.form_pinkText}>(Deze informatie zal niet publiekelijk weergeven of verkocht worden aan derden)</p>
               
                                            
                <select className={styles.form_link__dropdown} onChange={handleChooseRole} ref={chooseRole} id="selectRole">
                         <option value="lotgenoot">--selecteer een rol--</option>
                         <option value="lotgenoot">lotgenoot</option>
                         <option value="teamcaptain">Team Captain</option>
                         <option value="supporter">supporter</option>
                         <option value="group">inschrijving met meerdere mensen</option>
                </select> 
                <p className={styles.form_cursief}>Voor meer informatie over de 'rollen' in Race for the Cure, <NavLink to={ROUTES.home} target="_blank">klik hier</NavLink></p> 
             </>
           )}
         </section> 
       </div>
     </div>
    )
  }
}