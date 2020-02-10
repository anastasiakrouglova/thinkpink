import React from "react";
import styles from "./Races.module.css";
import { inject, observer, PropTypes } from "mobx-react";
import NavbarDark from "../components/NavbarDark.jsx";
import Race from "../components/Race.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Races = ({ raceStore }) => {
  // const raceDetail = raceStore.findById(id);
  const { racelijst } = raceStore;
  console.log(racelijst);

  return (
    <div>
      <div className="App-background-header">
        <NavbarDark />
        <p className={styles.h1}>Samen staan we sterk!</p>
        <div className="App-input_container">
          <input
            className="App-input_search"
            type="text"
            placeholder="Search..."
          />
          <button className="App-input_search__button">
            <img src="../assets/images/icons/search.svg" alt="search" />
          </button>
        </div>
      </div>
      <div className={styles.race_container}>
      {
        racelijst.map(race => (
          <NavLink className={styles.navlink} to={"/detail/" + race.id}><Race key={race.id} race={race}/></NavLink> 
          
        ))
      }
      </div>
    </div>
  );
};

Races.propTypes = {
  raceStore: PropTypes.observableObject.isRequired
};

export default inject(`raceStore`)(observer(Races));
