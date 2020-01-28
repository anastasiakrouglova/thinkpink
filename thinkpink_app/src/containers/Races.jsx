import React from "react";
import styles from "./Races.module.css";
import NavbarDark from "../components/NavbarDark.jsx";
import Race from "../components/Race.jsx"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Races = () => {
  return (
    <div>
      <NavbarDark />

      <p>Samen staan we sterk.</p>
      <div className="App-input_container">
        <input className="App-input_search" type="text" placeholder="Search..." />
        <button className="App-input_search__button"><img src="../assets/images/icons/search.svg" alt="search"/></button>
      </div>
      <NavLink className={styles.navlink} to={ROUTES.detail}><Race/></NavLink> 
    </div>
  );
};

export default Races;