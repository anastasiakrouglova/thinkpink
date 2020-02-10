'use strict'
import React from 'react'
import styles from "../../containers/Signup.module.css";
import store from '../../store/index'
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { withStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
              <div className={styles.step3_container}>
                <div className={styles.step3_containerLid}>
                  <h1 className="App-form-h1">Is dit juist?</h1>
                  <p className="App-body">Jouw profielfoto zal gebruikt worden als teamfoto op je pagina. 
                  Je kunt het achteraf nog wijzigen</p>
                  
                  <div className={styles.cardRita}>
                    <img className={styles.foto_cardRita} width="130" src="../assets/images/people/ritaBelgium.png" alt="person"></img>
                    <h2 className={styles.rita_text}>Rita Verbeeck</h2>
                    <p className="App-subtitle">lotgenoot</p>
                    <div className={styles.data_container}>
                      <div className={styles.data_cardRita}>
                        <h3 className={styles.data_cardRita_h3}>Geboortedatum</h3>
                        <p className="App-body"> 19/02/1968</p>
                      </div>
                      <div className={styles.data_cardRita}>
                        <h3 className={styles.data_cardRita_h3}>E-mailadres</h3>
                        <p className="App-body">rita.verbeeck@telenet.be</p>
                      </div>
                      <div className={styles.data_cardRita}>
                        <h3 className={styles.data_cardRita_h3}>T-shirt maat</h3>
                        <p className="App-body">M</p>
                      </div>
                    </div> 
                  </div>
                  <button className={styles.form_pinkLink}>Bewerk account</button>
                </div>
                <div>
                  <h1 className="App-form-h1">Vertel je team wie je bent</h1>
                  <div className={styles.inputTextfield}>
                  <TextField 
                    id="outlined-multiline-static"
                    label="Vertel over jezelf"
                    multiline
                    rows="4"
                    defaultValue=""
                    variant="outlined"
                    fullWidth
                    />
                  </div>
                  <FormGroup row>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Selecteer de race waaraan je wilt meedoen</FormLabel>
                      <RadioGroup aria-label="race" name="race" >
                        <FormControlLabel value="run" control={<PinkRadio />} label="lopen (6km)" />
                        <FormControlLabel value="walk" control={<PinkRadio />} label="wandelen (3km)" />
                        <FormControlLabel value="kids" control={<PinkRadio />} label="Kids Run (800m)" />
                      </RadioGroup>
                    </FormControl>
                  </FormGroup>
                </div>
             </div>
           ) : store.uiStore.role === `teamcaptain` ? (
            <div className={styles.step3_container}>
            <div className={styles.step3_containerLid}>
              <h1 className="App-form-h1">Wie is de lotgenoot?</h1>
              
              
                <img className={styles.foto_cardRita} width="130" src="../assets/images/icons/fotobutton.svg" alt="foto button"></img>
                <p className={styles.foto_textuitleg}>Upload een teamfoto of een foto
                  van de lotgenoot <br/> (mits toestemming)</p>
                <div className={styles.name_container}>
                <div className="App-form-input-container">
                  <label htmlFor="firstname" className={styles.label}>Voornaam</label>
                  <input required name="firstname" id="firstname" className={styles.input} placeholder="John" type="text" />
                </div>
              
                <div className="App-form-input-container">
                    <label htmlFor="lastname" className={styles.label}>Familienaam</label>
                    <input required name="lastname" id="lastname" className={styles.input} placeholder="Doe" type="text" />
                      </div>
                <div className={styles.inputTextfield}>
               </div>
              </div>
                    
              <TextField 
                  id="outlined-multiline-static"
                  label="Vertel over de lotgenoot"
                  multiline
                  rows="4"
                  defaultValue=""
                  variant="outlined"
                  fullWidth
                />               
            </div>
            <div>
              <h1 className="App-form-h1">Vertel je team wie je bent</h1>

              <FormGroup row>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Selecteer de race waaraan je wilt meedoen</FormLabel>
                  <RadioGroup aria-label="race" name="race" >
                    <FormControlLabel value="run" control={<PinkRadio />} label="lopen (6km)" />
                    <FormControlLabel value="walk" control={<PinkRadio />} label="wandelen (3km)" />
                    <FormControlLabel value="kids" control={<PinkRadio />} label="Kids Run (800m)" />
                    <FormControlLabel value="empty" control={<PinkRadio />} label="Ik doe niet mee" />
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            </div>
         </div>
           ) : store.uiStore.role === `supporter` ? (
            <div className={styles.step3_container}>
            <div className={styles.step3_containerLid}>
              <h1 className="App-form-h1">Is dit juist?</h1>
              <p className="App-body">Jouw profielfoto zal gebruikt worden als teamfoto op je pagina. 
              Je kunt het achteraf nog wijzigen</p>
              
              <div className={styles.cardRita}>
                <img className={styles.foto_cardRita} width="130" src="../assets/images/people/ritaBelgium.png" alt="person"></img>
                <h2 className={styles.rita_text}>Rita Verbeeck</h2>
                <p className="App-subtitle">lotgenoot</p>
                <div className={styles.data_container}>
                  <div className={styles.data_cardRita}>
                    <h3 className={styles.data_cardRita_h3}>Geboortedatum</h3>
                    <p className="App-body"> 19/02/1968</p>
                  </div>
                  <div className={styles.data_cardRita}>
                    <h3 className={styles.data_cardRita_h3}>E-mailadres</h3>
                    <p className="App-body">rita.verbeeck@telenet.be</p>
                  </div>
                  <div className={styles.data_cardRita}>
                    <h3 className={styles.data_cardRita_h3}>T-shirt maat</h3>
                    <p className="App-body">M</p>
                  </div>
                </div> 
              </div>
              <button className={styles.form_pinkLink}>Bewerk account</button>
            </div>
            <div>
              <h1 className="App-form-h1">Extra informatie</h1>
              <div className={styles.inputTextfield}>
              </div>
              <FormGroup row>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Selecteer de race waaraan je wilt meedoen</FormLabel>
                  <RadioGroup aria-label="race" name="race" >
                    <FormControlLabel value="run" control={<PinkRadio />} label="lopen (6km)" />
                    <FormControlLabel value="walk" control={<PinkRadio />} label="wandelen (3km)" />
                    <FormControlLabel value="kids" control={<PinkRadio />} label="Kids Run (800m)" />
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            </div>
         </div>
           ) : store.uiStore.role === `group` ? (
              <div className={styles.step3_container}>
              <div className={styles.step3_containerLid}>
                <h1 className="App-form-h1">Is dit juist?</h1>
                <p className="App-body">Jouw profielfoto zal gebruikt worden als teamfoto op je pagina. 
                Je kunt het achteraf nog wijzigen</p>
                
                <div className={styles.cardRita}>
                  <img className={styles.foto_cardRita} width="130" src="../assets/images/people/ritaBelgium.png" alt="person"></img>
                  <h2 className={styles.rita_text}>Rita Verbeeck</h2>
                  <p className="App-subtitle">lotgenoot</p>
                  <div className={styles.data_container}>
                    <div className={styles.data_cardRita}>
                      <h3 className={styles.data_cardRita_h3}>Geboortedatum</h3>
                      <p className="App-body"> 19/02/1968</p>
                    </div>
                    <div className={styles.data_cardRita}>
                      <h3 className={styles.data_cardRita_h3}>E-mailadres</h3>
                      <p className="App-body">rita.verbeeck@telenet.be</p>
                    </div>
                    <div className={styles.data_cardRita}>
                      <h3 className={styles.data_cardRita_h3}>T-shirt maat</h3>
                      <p className="App-body">M</p>
                    </div>
                  </div> 
                </div>
                <button className={styles.form_pinkLink}>Bewerk account</button>
              </div>
              <div>
                <h1 className="App-form-h1">Extra informatie</h1>
                <FormGroup row>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Selecteer de race waaraan je wilt meedoen</FormLabel>
                    <RadioGroup aria-label="race" name="race" >
                      <FormControlLabel value="run" control={<PinkRadio />} label="lopen (6km)" />
                      <FormControlLabel value="walk" control={<PinkRadio />} label="wandelen (3km)" />
                      <FormControlLabel value="kids" control={<PinkRadio />} label="Kids Run (800m)" />
                      <FormControlLabel value="empty" control={<PinkRadio />} label="Ik doe niet mee" />
                    </RadioGroup>
                  </FormControl>
                  </FormGroup>
              <div className="App-form-input-container">
                  <label htmlFor="bedrijf" className={styles.label}>Bedrijfsnaam (optioneel)</label>
                  <input required name="bedrijf" id="bedrijf" className={styles.input} placeholder="Deloitte" type="text" />
                </div>
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