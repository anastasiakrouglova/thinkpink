import React, { useRef } from "react";
import styles from "./Home.module.css";
import NavbarDark from "../components/NavbarDark.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

import { Controller, Scene } from "react-scrollmagic";
import Sequence from "../components/Sequence.jsx";

function Home() {
  const ref = useRef();
  return (
    <div className={styles.container}>
      <div className={styles.navbar}><NavbarDark className={styles.navbar} /></div>
      
      <section className={styles.title}>
          <span className={styles.h0_outlined}>Race</span> <br/>
          <span className={styles.h0_subtitle}>For The Cure</span> <br />
          <NavLink to={ROUTES.races}><button className={styles.primair_button}>Schrijf je in voor een race</button></NavLink> 
      </section>

      <section className={styles.section2}>
        <p className={styles.number}>01</p>
        <p className={styles.h1}>Wat is race for the cure?</p>
        <p className={styles.body}>Race For The Cure is een sportief evenement waarin solidariteit een belangrijke rol speelt in het gevecht tegen borstkanker. De race is origineel onstaat vanuit een initiatief van ‘Think Pink’’. Deze race heeft zich ondertussen uitgebreid over meer dan 20 landen in het Europees continent. De hele dag is gevuld met animatie en intense emoties.</p>
        <video src="../assets/video/test.mp4"></video>
      </section>
      
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
            {progress => (
            <div style={{ height: "100vh", position: "relative" }}>
              <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
      </Controller>  
    </div>
  );
};

export default Home;