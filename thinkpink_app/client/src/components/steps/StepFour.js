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
            {store.uiStore.role === `lotgenoot` || `supporter` || `teamcaptain` || `group` ? (
              <>
                <h1 className="App-form-h1">Betalingsinformatie</h1>
                <div className={styles.step3_container}>
                <div className={styles.step3_containerLid}>
                  <div>
                    <p className={styles.form_change_step3}>1x Race For The Cure ticket</p>
                    <p className={styles.form_cursief}>Antwerpen, Belgie</p>
                    <p className={styles.form_textWelcome}>27/09/2020</p>
                  </div>
                  <div>
                      <p>Totaal</p>
                      <p>€15</p>
                  </div>
                </div>
                  <div>
                    <p className={styles.form_change_step3}>Kies een betalingsmethode</p>
                    <div>
                      <button><img src="../assets/images/form/MC.svg" alt="mastercard"/></button>
                      <button><img src="../assets/images/form/bancontact.svg" alt="bancontact"/></button>
                      <button><img src="../assets/images/form/PP.svg" alt="Paypal"/></button>
                      <button><img src="../assets/images/form/VISA.svg" alt="VISA"/></button>
                    </div>
                  </div>
                </div>
              </>
            ): (
              <>
              <h1 className="App-form-h1">Ooops</h1>
              <p className={styles.form_textWelcome}>Hmm, je bent vergeten aan te duiden of je als lotgenoot/teamcaptain/supporter of groep wilt gaan. Ga terug naar de eerste pagina en selecteer een categorie.</p>
            </>
            )
          }
         </section> 
       </div>
     </div>
    )
  }
}
