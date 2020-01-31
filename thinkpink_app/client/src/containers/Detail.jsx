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
      <NavLink to={ROUTES.races}>Terug naar raceoverzicht</NavLink>
      <section>
        <div>
          <h1>
            <span>Antwerpen</span>  
            <span>België</span>
          </h1>
          <div>
            <div>
              <img src="../assets/images/icons/search.svg" alt="search"/>
              <p>Startlocatie</p>
              <p>Graanmarkt</p>
            </div>
            <div>
              <img src="../assets/images/icons/search.svg" alt="search"/>
              <p>Starttijd</p>
              <p>11:00 uur</p>
            </div>
            <div>
              <img src="../assets/images/icons/search.svg" alt="search"/>
              <p>Deelnemers</p>
              <p>1.174</p>
            </div>
          </div>
          <p className={styles.detail_body}>Dit jaar start Race For The Cure in Antwerpen op de mooie Graanmarkt. Het parcours is langs de mooiste plekjes van de Belgische havenstad. We zullen rond  sommige van de bekende momenumenten tegenkomen zoals het stadhuis en Sint-Andrieskerk. 
            Geniet van dit onvergetelijk moment dat draait rond liefde met je eigen groep.</p>
          <button>Schrijf je in voor deze race</button>
        </div>
        <div>
        <img src="../assets/images/icons/search.svg" alt="search"/>
          <div>
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