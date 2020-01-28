import React from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Home = () => {
  return (
    <div>
        <NavLink to={ROUTES.home}>Home</NavLink> 
        <NavLink to={ROUTES.races}>Kies een race</NavLink> 
        <p>Dit is de homePagina</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
};

export default Home;