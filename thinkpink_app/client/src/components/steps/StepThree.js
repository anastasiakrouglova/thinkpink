import React from 'react'
import store from '../../store/index'
import styles from "../../containers/Signup.module.css";

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
                
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.form_change_step3}>Beluister het fragment hier:</label>
                    <a target="_blank" className={styles.form_pinkText_normal} href="https://www.youtube.com/watch?v=g_xcxu0TTvo">If I Ain't Got You - Alicia Keys</a>
                  </div>
             </>
           ) : store.uiStore.role === `group` ? (
             <div className={styles.step3_container}>
              <div className={styles.step3_containerLid}>
                <h1 className="App-form-h1">Nodig supporters uit</h1>
                <p className={styles.form_textWelcome}>De mensen die je opgeeft zullen allemaal een e-mail ontvangen met instructies over het inschrijvingsproces van je team. Vanaf 10 mensen betaal moet je groep €12 p.p betalen in plaats van €15 p.p, maar jij hoeft dus niet voor hen te betalen.</p>
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="email" className={styles.label}>email</label>
                    <input className={styles.input} type="text" name="email" placeholder="johndoe@gmail.com"/>
                  </div>
                  <button className="App-button_secundair">+ Voeg nog een lid toe</button>  
                </form>    
              </div> 
              <div>
              <h1 className="App-form-h1">Schrijf extra mensen in.</h1>
              <p className={styles.form_textWelcome}>Hier betaal je ook voor de mensen die je extra inschrijft. Je vrienden, collega’s of  familieleden die je hier registreert hoeven dus geen account aan te maken.</p>
              <div className={styles.name_container}>
                      <div className="App-form-input-container">
                        <label htmlFor="firstname" className={styles.label}>Voornaam</label>
                        <input required name="firstname" id="firstname" className={styles.input} placeholder="John" type="text" />
                      </div>
        
                      <div className="App-form-input-container">
                          <label htmlFor="lastname" className={styles.label}>Familienaam</label>
                          <input required name="lastname" id="lastname" className={styles.input} placeholder="Doe" type="text" />
                      </div>
                    </div>
                  

                    <div className="App-form-input-container">
                      <label htmlFor="email" className={styles.label}>Email</label>
                      <input required name="email" id="email" className={styles.input} placeholder="johndoe@gmail.com" type="email" />
                    </div>

                    <div className={styles.container_date}>
                      <div className="App-form-input-container">
                        <label htmlFor="day" className={styles.label}>day</label>
                        <input required name="day" id="day" className={styles.input} placeholder="01" type="number" min="1" max="31" />
                      </div>
                      <div className="App-form-input-container">
                        <label htmlFor="month" className={styles.label}>month</label>
                        <input required name="month" id="month" className={styles.input} placeholder="02" type="number"  min="1" max="12" />
                      </div>
                      <div className="App-form-input-container">
                        <label htmlFor="year" className={styles.label}>year</label>
                        <input required name="year" id="year" className={styles.input} placeholder="*****" type="number" min="1900" max="2500" />
                      </div>
                    </div>

                    <div className="App-form-input-container">
                        <label htmlFor="year" className={styles.label}>T-shirt maat</label>
                      <div>
                        
                        <input className={styles.radioInput} type="radio" name="size" id="xs" />
                        <label className={styles.radioLabel} htmlFor="xs">xs</label>
                        
                        
                        <input className={styles.radioInput} type="radio" name="size" id="s" />
                        <label className={styles.radioLabel} htmlFor="s">s</label>
                        
                        
                        <input className={styles.radioInput}  type="radio" name="size" id="m" />
                        <label className={styles.radioLabel} htmlFor="m">m</label>
                        
                        
                        <input className={styles.radioInput}  type="radio" name="size" id="l" />
                        <label className={styles.radioLabel} htmlFor="l">l</label>

                        
                        <input className={styles.radioInput}  type="radio" name="size" id="xl" />
                        <label className={styles.radioLabel} htmlFor="xl">xl</label>

                        
                        <input className={styles.radioInput}  type="radio" name="size" id="xxl" />
                        <label className={styles.radioLabel} htmlFor="xxl">xxl</label>

                          </div>
                           
                        </div>
                        <button className={styles.lidtoevoegen}>+ Voeg nog een lid toe</button> 
              </div>         

             </div>
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
