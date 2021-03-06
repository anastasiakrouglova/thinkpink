import React from 'react'
import store from '../../store/index'
import styles from "../../containers/Signup.module.css";


import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const PinkRadio = withStyles({
  root: {
    color: pink[300],
    '&$checked': {
      color: pink[300],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

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
              <div className={styles.step3_container}>
              <div className={styles.step3_containerLid}>
                  <h1 className="App-form-h1">Jouw groepslied aan de finish!</h1>
               <p className={styles.form_textWelcome}>Wanneer je groep over de finishlijn gaat, zal een lied worden afgespeeld om jullie prestatie te vieren.
                  Vul een geldige Youtube-link in als je overwinningslied dat gehoord zal worden door alle supporters!
              </p>
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.label}>Youtube-link</label>
                    <input className={styles.input} type="text" name="link" placeholder="https://www.youtube.com/watch?v=hhE7QMXRE1g"/>
                  </div>
                </form>
                <a target="_blank" className={styles.form_pinkText} href="https://www.wikihow.com/Find-Your-YouTube-URL">Hoe krijg ik een youtubelink?</a>
              </div>
              
              <div className={styles.bak_div}>
                <h1 className="App-form-h1">Dessertjes bakken</h1>
               <p className={styles.form_textWelcome}>Als team krijg je op de race een standje toegewezen waar iedereen zijn spullen kan achterlaten en naartoe komen. Aan dat standje kan je ook dessertjes of andere zaken verkopen voor 2€. Al het ingezameld geld zal dan gaan naar Think Pink voor onderzoek van borstkanker.</p>
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.label}>Jouw bakspecialiteit</label>
                    <input className={styles.input} type="text" name="link" placeholder="Brownies met witte chocolade"/>
                  </div>
                </form>
                <p className={styles.form_cursief}>Als jullie iets bakken, krijgt heel het team als beloning een massage! <br/> (je kunt het later nog steeds veranderen)</p>
              </div>
              
              </div>
           ) : store.uiStore.role === `teamcaptain` ? (
                <div className={styles.step3_container}>
                  <div className={styles.step3_containerLid}>
                  <h1 className="App-form-h1">Jouw groepslied aan de finish!</h1>
                  <p className={styles.form_textWelcome}>Wanneer de groep van je lotgenoot over de finishlijn gaat, zal een lied worden afgespeeld om jullie prestatie te vieren.
                      Vul een geldige Youtube-link in als jullie overwinningslied dat gehoord zal worden door alle supporters!</p>
                    
                    <form>
                      <div className="App-form-input-container">
                        <label htmlFor="link" className={styles.label}>Youtube-link</label>
                        <input className={styles.input} type="text" name="link" placeholder="https://www.youtube.com/watch?v=hhE7QMXRE1g"/>
                      </div>
                    </form>
                    <a target="_blank" className={styles.form_pinkText} href="https://www.wikihow.com/Find-Your-YouTube-URL">Hoe krijg ik een youtubelink?</a>
                </div>
                <div className={styles.bak_div}>
                <h1 className="App-form-h1">Dessertjes bakken</h1>
               <p className={styles.form_textWelcome}>Als team krijg je op de race een standje toegewezen waar iedereen zijn spullen kan achterlaten en naartoe komen. Aan dat standje kan je ook dessertjes of andere zaken verkopen voor 2€. Al het ingezameld geld zal dan gaan naar Think Pink voor onderzoek van borstkanker.</p>
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.label}>Jouw bakspecialiteit</label>
                    <input className={styles.input} type="text" name="link" placeholder="Brownies met witte chocolade"/>
                  </div>
                </form>
                <p className={styles.form_cursief}>Als jullie iets bakken, krijgt heel het team als beloning een massage! <br/> (je kunt het later nog steeds veranderen)</p>
              </div>
                
                
                </div>
           ) : store.uiStore.role === `supporter` ? (
              <div className={styles.step3_container}>
              <div className={styles.step3_containerLid}>
                <h1 className="App-form-h1">Jouw groepslied aan de finish!</h1>
                <p className={styles.form_textWelcome}>Je Team Captain Rita heeft ervoor gekozen om <span className={styles.form_pinkText_normal}>“If I Ain’t Got You - Alicia Keys”</span> als finishnummer te gebruiken. Deze song zal dus afgespeeld worden bij het succesvol beëindigen van de run.</p>
                
                  <div className="App-form-input-container">
                    <label htmlFor="link" className={styles.form_change_step3}>Beluister het fragment hier:</label>
                    <a target="_blank" className={styles.form_pinkText_normal} href="https://www.youtube.com/watch?v=g_xcxu0TTvo">If I Ain't Got You - Alicia Keys</a>
                </div>
              </div>
              <div className={styles.bak_div}>
                <h1 className="App-form-h1">Dessertjes bakken</h1>
               <p className={styles.form_textWelcome}>Je teamcaptain heeft ervoor gekozen om <span className={styles.form_pinkText_normal}>Brownies met witte chocolade</span> te bakken. Als je meebakt, krijg je recht op een massage na de run of wandeling.</p>
               <FormGroup row>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="race" name="race" >
                        <FormControlLabel value="dessertYes" control={<PinkRadio />} label="Ik ga akkoord en zal zelf bijdragen bij het bakken van dit dessert" />
                        <FormControlLabel value="dessertNo" control={<PinkRadio />} label="Ik ga niet akkoord en wil niet bakken, hierbij verlies ik ook recht op een massage" />
                      </RadioGroup>
                    </FormControl>
                  </FormGroup>
              </div>
             </div>
           ) : store.uiStore.role === `group` ? (
             <div className={styles.step3_container}>
              <div className={styles.step3_containerLid}>
                <h1 className="App-form-h1">Nodig supporters uit</h1>
                <p className={styles.form_textWelcome}>De mensen die je opgeeft zullen allemaal een e-mail ontvangen met instructies over het inschrijvingsproces van je team. Vanaf 10 mensen betaal moet je groep €12/persoon betalen in plaats van €15/persoon, maar jij hoeft dus niet voor hen te betalen.</p>
                <form>
                  <div className="App-form-input-container">
                    <label htmlFor="email" className={styles.label}>E-mailadres</label>
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
                      <label htmlFor="email" className={styles.label}>E-mailadres</label>
                      <input required name="email" id="email" className={styles.input} placeholder="johndoe@gmail.com" type="email" />
                    </div>

                    <div className={styles.container_date}>
                      <div className="App-form-input-container">
                        <label htmlFor="day" className={styles.label}>Dag</label>
                        <input required name="day" id="day" className={styles.input} placeholder="01" type="number" min="1" max="31" />
                      </div>
                      <div className="App-form-input-container">
                        <label htmlFor="month" className={styles.label}>maand</label>
                        <input required name="month" id="month" className={styles.input} placeholder="02" type="number"  min="1" max="12" />
                      </div>
                      <div className="App-form-input-container">
                        <label htmlFor="year" className={styles.label}>jaar</label>
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
              <p className={styles.form_textWelcome}>Hmm, je bent vergeten aan te duiden of je als lotgenoot/Team Captain/supporter of groep wilt gaan. Ga terug naar de eerste pagina en selecteer een categorie.</p>
            </>
           )}
         </section> 
       </div>
     </div>
    )
  }
}
