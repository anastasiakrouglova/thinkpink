'use strict'
import React from 'react'
import styles from "../../containers/Signup.module.css";
import store from '../../store/index'
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

export class StepTwo extends React.Component {
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
       <div className={styles.container_signup}>


         <section>
           {store.uiStore.role === `lotgenoot` ? (
             <>
               <h1 className="App-form-h1">Is dit juist? De foto zal gebruikt worden
                als teamfoto</h1>
                <div></div>
              <p>Vertel aan je team wie je bent</p>
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
                <h1 className="App-form-h1">Ooops</h1>
                <p className={styles.form_textWelcome}>Hmm, je bent vergeten aan te duiden of je als lotgenoot/teamcaptain/supporter of groep wilt gaan. Ga terug naar de eerste pagina en selecteer een categorie.</p>
             </>
           )}
         </section> 
       </div>
     </div>
    )
  }
}