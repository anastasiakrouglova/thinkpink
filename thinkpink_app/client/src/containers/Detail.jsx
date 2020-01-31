import React from "react";
import styles from "./Detail.module.css";
import NavbarDark from "../components/NavbarDark.jsx";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Detail = () => {
  return (
    <div>
      <NavbarDark />
      <div className={styles.detail_container}>
      <NavLink className={styles.backButton} to={ROUTES.races}>&#8592; Terug naar raceoverzicht</NavLink>
      <section className={styles.detail_container_info}>
        <div>
          <h1 className={styles.city_container}>
            <span className={styles.city}>Antwerpen</span>  
            <span className={styles.country}>&nbsp; (België)</span>
          </h1>
          <div className={styles.info_container}>
              
            <div>
              <div className={styles.uppertitle_container}>
                <img src="../assets/images/icons/locationPink.svg" alt="search"/>
                <p className={styles.uppertitle}>Startlocatie</p>
              </div>
              <p className={styles.info}>Graanmarkt</p>
            </div>
              
            <div>
              <div className={styles.uppertitle_container}>
                <img src="../assets/images/icons/clockPink.svg" alt="search"/>
                <p className={styles.uppertitle}>Starttijd</p>
              </div>
              <p className={styles.info}>11:00 uur</p>
            </div>
              
            <div>
              <div className={styles.uppertitle_container}>
               <img src="../assets/images/icons/personPink.svg" alt="search"/>
               <p className={styles.uppertitle}>Deelnemers</p>
              </div>
              <p className={styles.info}>1.174</p>
            </div>
              
          </div>
          <p className={styles.detail_body}>Dit jaar start Race For The Cure in Antwerpen op de mooie Graanmarkt. Het parcours is langs de mooiste plekjes van de Belgische havenstad. We zullen rond  sommige van de bekende momenumenten tegenkomen zoals het stadhuis en Sint-Andrieskerk. 
            Geniet van dit onvergetelijk moment dat draait rond liefde met je eigen groep.</p>
          <button className="App-button_primair">Schrijf je in voor deze race</button>
        </div>
        <div>
        <img className={styles.info_image} src="../assets/images/cities/antwerpen_condensed.png" alt="image city"/>
          <div className={styles.counter_container}>
            <p>
              <span>04</span>
              <span>dagen</span>
            </p>
            <p>
              <span>03</span>
              <span>uren</span>
            </p>
            <p>
              <span>03</span>
              <span>minuten</span>
            </p>
          </div>
        </div>
        </section>

        </div>
    </div>
  );
};

export default Detail;