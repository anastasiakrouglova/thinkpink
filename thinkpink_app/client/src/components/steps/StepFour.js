'use strict'
import React from 'react'
import store from '../../store/index'
import styles from "../../containers/Signup.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

export class StepFour extends React.Component {
  constructor () {
    super()
  }


  render () {
    return (
<div className={styles.form_container}>
       <div>
         <section >
           {store.uiStore.role === `lotgenoot` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina als een lotgenoot!</p>
              </>
           ) : store.uiStore.role === `teamcaptain` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Creëer een pagina voor een lotgenoot!</p>
               </>
           ) : store.uiStore.role === `supporter` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">
                 Leuk dat je wilt meelopen in Race For The Cure!
               </p>
             </>
           ) : store.uiStore.role === `group` ? (
             <>
               <h1 className="App-form-h1">Hi {store.uiStore.role}!</h1>
               <p className="App-body">Registreer meerdere mensen!</p>
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
