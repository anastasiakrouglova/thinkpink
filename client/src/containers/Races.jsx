import React from "react";
import styles from "./Races.module.css";
import { inject, observer, PropTypes } from "mobx-react";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Footer from "../components/Footer.jsx";
import Race from "../components/Race.jsx";
import { NavLink } from "react-router-dom";

const Races = ({ raceStore }) => {
  // const raceDetail = raceStore.findById(id);
  const { racelijst } = raceStore;
  console.log(racelijst);

  return (
    <div>
      <div className="App-background-header">
        <NavbarWhite />
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
        racelijst.map((race, index) => (
          <NavLink key={index} race={race} className={styles.navlink} to={`/detail/${race.id}`}><Race key={race.id} race={race}/></NavLink> 
        ))
      }
      </div>
      <Footer/>
    </div>
  );
};

Races.propTypes = {
  raceStore: PropTypes.observableObject.isRequired
};

export default inject(`raceStore`)(observer(Races));
