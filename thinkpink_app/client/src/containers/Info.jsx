import React from "react";
import styles from "./Info.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Race from "../components/Race.jsx"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Info = () => {
  return (
    <div className={styles.uppercontainer}>
          <NavbarWhite />
          <div>
            <NavLink className="App-backbutton" to={ROUTES.races}>Races</NavLink> /
            <NavLink className="App-backbutton" to={ROUTES.detail}>Antwerpen (België)</NavLink> /
            <NavLink className="App-backbutton" to={ROUTES.info}>TeamRitaVerbeek</NavLink> 
          </div>
          <div className={styles.container}>
            <section className={styles.card_container}>
            <img src="../assets/images/people/rita.png" width="150" height="150" alt="profile picture"/>
              <div>
                <div >
                  <p className={styles.tekst_person}>Rita een leuke dame uit Brugge die vorig jaar 
                    overleden is aan borstkanker.
                    Om haar herinnering in leve te houden, hebben we besloten om deel te nemen met Race for The Cure.</p><br/>
                  <p className={styles.tekst_person}>Supporter voor Rita!<br/> Dankuwel!</p>
                </div>
                <button className="App-button_secundair-outline">Doneer aan dit team</button>
                <button className="App-button_secundair">Schrijf je in voor deze race</button>
              </div>
            
            <div>
              <div className={styles.info_person_container}>
                  <img className={styles.info_icon__teamcaptain} src="../assets/images/icons/crown.svg" alt="crown icon" />
                  <div>
                    <p className="App-body-bold">Teamcaptain</p>
                    <p className={styles.info_musicname}>John Doe</p>             
                  </div>
              </div>
              <div className={styles.info_person_container}>
                  <img className={styles.info_icon__music} src="../assets/images/icons/song.svg" alt="song" />
                  <div>
                    <p className="App-body-bold">Groepslied</p>
                    <p className={styles.info_musicname}>SHAED ft. Zayn -Trampoline</p>             
                  </div>
              </div>
              <div className={styles.info_person_container}>
              <img className={styles.info_icon} src="../assets/images/icons/dessert.svg" alt="dessert" />
                <div>
                  <p className="App-body-bold">Bakken / Dessert</p>
                  <p className={styles.info_musicname}>Brownies met witte chocolade</p>             
                </div>
              </div>
              </div>
            </section>
          </div>
    </div>
  );
};

export default Info;