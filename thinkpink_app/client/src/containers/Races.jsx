import React from "react";
import styles from "./Races.module.css";
import { inject, observer, PropTypes } from "mobx-react";
import NavbarDark from "../components/NavbarDark.jsx";
import Race from "../components/Race.jsx"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Races = ({ raceStore }) => {
  const { racelijst } = raceStore;

  return (
    <div>
      <div className="App-background-header">
        <NavbarDark />
        <p className={styles.h1}>Samen staan we sterk.</p>
        <div className="App-input_container">
          <input className="App-input_search" type="text" placeholder="Search..." />
          <button className="App-input_search__button"><img src="../assets/images/icons/search.svg" alt="search"/></button>
        </div>
      </div>
      
      {
        racelijst.map(race => (
          <NavLink className={styles.navlink} to={ROUTES.detail}><Race key={race.id} race={race} /></NavLink> 
          
        ))
      }
      
      
    </div>
  );
};

Races.propTypes = {
  raceStore: PropTypes.observableObject.isRequired
};

export default inject(`raceStore`)(observer(Races));