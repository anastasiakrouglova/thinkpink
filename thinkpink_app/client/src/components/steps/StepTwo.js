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
                </div>

                <div>
                  <h1 className="App-form-h1">Vertel aan je team wie je bent</h1>
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
                      <FormLabel component="legend">Selecteer jouw soort race</FormLabel>
                      <RadioGroup aria-label="race" name="race" >
                        <FormControlLabel value="run" control={<PinkRadio />} label="Lopen (6km)" />
                        <FormControlLabel value="walk" control={<PinkRadio />} label="Wandelen (3km)" />
                        <FormControlLabel value="kids" control={<PinkRadio />} label="Kids Run (800m)" />
                      </RadioGroup>
                    </FormControl>
                  </FormGroup>
                </div>
             </div>
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