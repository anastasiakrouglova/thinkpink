import React from "react";
import styles from "./SupporterOrGroup.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject } from "mobx-react";

const SupporterOrGroup = ({uiStore}) => {

  const handleClickSupporter = () => {
    uiStore.role = `supporter`;
    console.log(uiStore.role)
  }

  const handleClickGroup = () => {
    uiStore.role = `group`;
    console.log(uiStore.role)
  }

  return (
    <div>
      <div>
        <NavbarWhite />
        <h1 className={styles.title}>Bedankt voor je enthousiasme!</h1>
        <p className={styles.subtitle}>Kies hoe je je wilt inschrijven:</p>
        <div className={styles.container_cards}>

          <div className={styles.cardlotgenoot}>
            <NavLink onClick={handleClickSupporter} className={styles.cardlotgenoot_navlink} to={ROUTES.login}>
              <p className={styles.infotext}>
                Ik wil graag alleen deelnemen als <span className={styles.lotgenoot}>supporter</span> voor een lotgenoot
              </p>
              <p className={styles.price}>€15</p>
              <div className={styles.container_button}>
                <button className={styles.card_button}>registreer supporter</button>
              </div>
            </NavLink>
          </div>
          <div className={styles.cardteamcaptain}>
            <NavLink onClick={handleClickGroup} className={styles.cardlotgenoot_navlink} to={ROUTES.login}>
              <p className={styles.infotext}>
                Ik wil graag <span className={styles.teamcaptain}>een groep</span> inschrijven voor een lotgenoot
              </p>
      
              <p className={styles.price}>vanaf €12 p.p</p>
              <div className={styles.container_button}>
                <button className={styles.card_button}>registreer een groep</button>
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

export default inject(`uiStore`)(SupporterOrGroup);