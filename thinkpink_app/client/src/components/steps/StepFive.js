'use strict'
import React from 'react'
import styles from "../../containers/Signup.module.css";
import store from '../../store/index'
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

export class StepFive extends React.Component {
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
          <h1 className="App-form-h1">Succes!</h1>
           {store.uiStore.role === `lotgenoot` || store.uiStore.role === `teamcaptain` ? (
             <>
                <p className={styles.form_textWelcome}>Je pagina is aangemaakt, deel onderstaande link met mensen die je in je team wilt hebben!!</p>
                <NavLink to={ROUTES.home}>raceforthecure.com/teams/78ghYlx4</NavLink>
                
                <p className={styles.form_textWelcome}>Sharing is caring. Show your initiative on social media!</p>
                <div>
                  <a target="_blank" className={styles.form_pinkText_normal} href="https://www.youtube.com/watch?v=g_xcxu0TTvo"><img src="../assets/images/form/sm/facebook.svg" alt="facebook"></img></a>
                  <a target="_blank" className={styles.form_pinkText_normal} href="https://www.youtube.com/watch?v=g_xcxu0TTvo"><img src="../assets/images/form/sm/vk.svg" alt="vk"></img></a>
                  <a target="_blank" className={styles.form_pinkText_normal} href="https://www.youtube.com/watch?v=g_xcxu0TTvo"><img src="../assets/images/form/sm/insta.svg" alt="insta"></img></a>
                  <a target="_blank" className={styles.form_pinkText_normal} href="https://www.youtube.com/watch?v=g_xcxu0TTvo"><img src="../assets/images/form/sm/twitter.svg" alt="twitter"></img></a>
                </div>
             </>
           ) : store.uiStore.role === `supporter` || store.uiStore.role === `group` ? (
             <>
                  <p className={styles.form_textWelcome}>Dit is de pagina van #TEAMRITA, bekijk andere supporters via deze link!</p>
                  <NavLink to={ROUTES.home}>raceforthecure.com/teams/78ghYlx4</NavLink>
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