import React from "react";
import styles from "./SurvivorOrTeamcaptain.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Race from "../components/Race.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Join = () => {
  return (
    <div>
      <div>
        <NavbarWhite />
        <h1 className={styles.title}>Bedankt voor je enthousiasme!</h1>
        <p className={styles.subtitle}>kies hoe je een lotgenoot wilt toevoegen:</p>
        <div className={styles.container_cards}>

          <div className={styles.cardlotgenoot}>
            <NavLink className={styles.cardlotgenoot_navlink} to={ROUTES.login}>
              <p className={styles.infotext}>
                Ik ben een <span className={styles.lotgenoot}>lotgenoot</span> en wil mijn eigen pagina
                onderhouden
              </p>
              <p className={styles.price}>€15</p>
              <div className={styles.container_button}>
                <button className={styles.card_button}>registreer lotgenoot</button>
              </div>
            </NavLink>
          </div>
          <div className={styles.cardteamcaptain}>
            <NavLink className={styles.cardlotgenoot_navlink} to={ROUTES.login}>
              <p className={styles.infotext}>
                Ik ben een <span className={styles.teamcaptain}>Team Captain</span> en wil een pagina aanmaken
                voor een lotgenoot die ik ken
              </p>
              
              <p className={styles.price}>€15</p>
              <span className={styles.exclusief}>(excl. ticket lotgenoot)</span>
              <div className={styles.container_button}>
                <button className={styles.card_button}>registreer een teamcaptain</button>
              </div>
            </NavLink>
          </div>

        </div>
        <div className={styles.backbutton_container}>
          <NavLink className={styles.backbutton} to={ROUTES.detail}>&#8592; terug</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Join;
