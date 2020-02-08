'use strict'
import React from 'react'
import store from '../../store/index'
import styles from "../../containers/Signup.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

export class StepThree extends React.Component {
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
               <h1 className="App-form-h1">Laten we het vieren!</h1>
               <p className={styles.form_textWelcome}>Wanneer je groep over de finishlijn gaat, zal een lied worden afgespeeld om jullie prestatie te vieren.
                  vul een geldige Youtube-link in als je victory-lied dat gehoord zal worden door alle supporters!</p>
                
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.label}>Youtube-link</label>
                    <input className={styles.input} type="text" name="link" placeholder="https://www.youtube.com/watch?v=hhE7QMXRE1g"/>
                  </div>
                </form>
                <a target="_blank" className={styles.form_pinkText} href="https://www.wikihow.com/Find-Your-YouTube-URL">Hoe krijg ik een youtubelink?</a>
              </>
           ) : store.uiStore.role === `teamcaptain` ? (
             <>
               <h1 className="App-form-h1">Laten we het vieren!</h1>
               <p className={styles.form_textWelcome}>Wanneer de groep van je lotgenoot over de finishlijn gaat, zal een lied worden afgespeeld om jullie prestatie te vieren.
                  vul een geldige Youtube-link in als jullie victory-lied dat gehoord zal worden door alle supporters!</p>
                
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.label}>Youtube-link</label>
                    <input className={styles.input} type="text" name="link" placeholder="https://www.youtube.com/watch?v=hhE7QMXRE1g"/>
                  </div>
                </form>
                <a target="_blank" className={styles.form_pinkText} href="https://www.wikihow.com/Find-Your-YouTube-URL">Hoe krijg ik een youtubelink?</a>
               </>
           ) : store.uiStore.role === `supporter` ? (
             <>
               <h1 className="App-form-h1">Laten we het vieren!</h1>
               <p className={styles.form_textWelcome}>Je teamcaptain Rita heeft ervoor gekozen om <span className={styles.form_pinkText_normal}>“If I Ain’t Got You - Alicia Keys”</span> als groepsnummer te gebruiken.</p>
                
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.form_change_step3}>Beluister het fragment hier:</label>
                    <a target="_blank" className={styles.form_pinkText_normal} href="https://www.youtube.com/watch?v=g_xcxu0TTvo">If I Ain't Got You - Alicia Keys</a>
                  </div>
                </form>
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
