import React from "react";
import styles from "./Home.module.css";
import NavbarDark from "../components/NavbarDark.jsx";

const Home = () => {
  return (
    <div>
        <NavbarDark />
      <p>Dit is de homePagina</p>
      <button className="App-button_primair">Primaire button</button>
      <a class={styles.play_btn} href="#"></a>
    </div>
  );
};

export default Home;