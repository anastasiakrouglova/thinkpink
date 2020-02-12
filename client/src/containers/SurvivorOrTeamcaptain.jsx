import React from "react";
import styles from "./SurvivorOrTeamcaptain.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Footer from "../components/Footer.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject } from "mobx-react";

const SurvivorOrTeamcaptain = ({uiStore}) => {


  const handleClickLotgenoot = () => {
    uiStore.role = `lotgenoot`;
    console.log(uiStore.role)
  }

  const handleClickTeamCaptain = () => {
    uiStore.role = `teamcaptain`;
    console.log(uiStore.role)
  }

  return (
    <div>
      <div>
        <NavbarWhite />
        <h1 className={styles.title}>Bedankt voor je enthousiasme!</h1>
        <p className={styles.subtitle}>kies hoe je een lotgenoot wilt toevoegen:</p>
        <div className={styles.container_cards}>

          <div className={styles.cardlotgenoot}>
          {!uiStore.authUser ? (
              <>
                <NavLink onClick={handleClickLotgenoot} className={styles.cardlotgenoot_navlink} to={ROUTES.login}>
                  <p className={styles.infotext}>
                    Ik ben een <span className={styles.lotgenoot}>lotgenoot</span> en wil mijn eigen pagina
                    onderhouden
                  </p>
                  <p className={styles.price}>€15</p>
                  <div className={styles.container_button}>
                    <button className={styles.card_button}>registreer lotgenoot</button>
                  </div>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink onClick={handleClickLotgenoot} className={styles.cardlotgenoot_navlink} to={ROUTES.formwelcome}>
                  <p className={styles.infotext}>
                    Ik ben een <span className={styles.lotgenoot}>lotgenoot</span> en wil mijn eigen pagina
                    onderhouden
                  </p>
                  <p className={styles.price}>€15</p>
                  <div className={styles.container_button}>
                    <button className={styles.card_button}>registreer lotgenoot</button>
                  </div>
                </NavLink> 
              </> 
            )
            }

          </div>
          <div className={styles.cardteamcaptain}>
          {!uiStore.authUser ? (
              <>
                <NavLink onClick={handleClickTeamCaptain} className={styles.cardlotgenoot_navlink} to={ROUTES.login}>
                  <p className={styles.infotext}>
                    Ik ben een <span className={styles.teamcaptain}>Team Captain</span> en wil een pagina aanmaken
                    voor een lotgenoot die ik ken
                  </p>
                  
                  <p className={styles.price}>€15</p>
                  <span className={styles.exclusief}>(excl. ticket lotgenoot)</span>
                  <div className={styles.container_button}>
                    <button className={styles.card_button}>registreer een Team Captain</button>
                  </div>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink onClick={handleClickTeamCaptain} className={styles.cardlotgenoot_navlink} to={ROUTES.formwelcome}>
                  <p className={styles.infotext}>
                    Ik ben een <span className={styles.teamcaptain}>Team Captain</span> en wil een pagina aanmaken
                    voor een lotgenoot die ik ken
                  </p>
                  
                  <p className={styles.price}>€15</p>
                  <span className={styles.exclusief}>(excl. ticket lotgenoot)</span>
                  <div className={styles.container_button}>
                    <button className={styles.card_button}>registreer een Team Captain</button>
                  </div>
                </NavLink>                 
              </> 
            )
            }
            

          </div>

        </div>
        <div className={styles.backbutton_container}>
          <NavLink className={styles.backbutton} to={ROUTES.races}>&#8592; terug</NavLink>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default inject(`uiStore`)(SurvivorOrTeamcaptain);
