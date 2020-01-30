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
        <div>
          <p className={styles.number}>01</p>
          <p className={styles.h1}>Wat is race for the cure?</p>
          <p className={styles.body}>Race For The Cure is een sportief evenement waarin solidariteit een belangrijke rol speelt in het gevecht tegen borstkanker. De race is origineel onstaat vanuit een initiatief van ‘Think Pink’’. Deze race heeft zich ondertussen uitgebreid over meer dan 20 landen in het Europees continent. De hele dag is gevuld met animatie en intense emoties.</p>
        </div>
        <iframe className={styles.video} width="520" height="430" src="https://www.youtube.com/embed/oUm-b265nt8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>

      <section className={styles.section3}>
        <div>
          <p className={styles.number}>02</p>
          <p className={styles.h1}>Lotgenoten staan centraal</p>
          <p className={styles.body}>Op dit evenement draait het allemaal rond de lotgenoten en hun sociaal vangnet. Je kan ze makkelijk spotten met hun roze T-shirt. Loop met hen mee in een witte T-shirt zo vormen we een grote beweging tegen borstkanker. Zo ben je zelf ook in beweging en heb je minder kans op kanker. </p>
        </div>
        <img className={styles.img_lotgenoot} width="520" height="430" src="../assets/images/home/lotgenoten.png" alt="lotgenoten"/>
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