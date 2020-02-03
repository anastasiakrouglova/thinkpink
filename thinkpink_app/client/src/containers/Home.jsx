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
      <div className={styles.background_image}></div>
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
        </div>
        <div className={styles.role_container}>
          <div className={styles.role_subcontainer}>
            <p className={styles.h2}>Team Captain</p>
            <p className={styles.body}>Een groep kan zowel groot als
                klein zijn, jij bent de verantwoordelijke
                in je subgroep dat minstens 10
                deelnemers telt. Ben je dus bijvoorbeeld een directeur van een vereniging? Dan is deze taak op je rug geschreven! </p>
          </div>
          <div className={styles.role_subcontainer}>
            <p className={styles.h2}>Lotgenoot</p>
            <p className={styles.body}>
              Ik ben een overlever!
              Ja je bent er één! Neem de roze t-shirt en loop op een prachtig natuurdomein omringd door vele supporters!
            </p>
          </div>
          <div>
            <p className={styles.h2}>Supporter</p>
            <p className={styles.body}>
              Wil je solo lopen of je gewoon toevoegen aan een bestaande groep? Dan staat supporteer op je lijf geschreven.
            </p>
          </div>
          
        </div>
          {/* <p className={styles.body}>Op dit evenement draait het allemaal rond de lotgenoten en hun sociaal vangnet. Je kan ze makkelijk spotten met hun roze T-shirt. Loop met hen mee in een witte T-shirt zo vormen we een grote beweging tegen borstkanker. Zo ben je zelf ook in beweging en heb je minder kans op kanker. </p> */}
        {/* <img className={styles.img_lotgenoot} width="520" height="430" src="../assets/images/home/lotgenoten.png" alt="lotgenoten"/> */}
      </section>

      
        {/* <div>
          <p className={styles.number}>02</p>
          <p className={styles.h1}>Lotgenoten staan centraal</p>
          <p className={styles.body}>Op dit evenement draait het allemaal rond de lotgenoten en hun sociaal vangnet. Je kan ze makkelijk spotten met hun roze T-shirt. Loop met hen mee in een witte T-shirt zo vormen we een grote beweging tegen borstkanker. Zo ben je zelf ook in beweging en heb je minder kans op kanker. </p>
        </div>
        <img className={styles.img_lotgenoot} width="520" height="430" src="../assets/images/home/lotgenoten.png" alt="lotgenoten"/> */}

      <section className={styles.section4}>
        <div className={styles.challenges__title}>
          <p className={styles.number}>03</p>
          <p className={styles.h1}>Challenges</p>
          <p className="App-body">Probeer met je team zoveel mogelijk challenges te volbrengen en word beloond!</p>
        </div>
        <div className={styles.container_challenges}>
            <div className={styles.container_challenge}>
              <img className={styles.challenges__image}src="../assets/images/icons/radio.svg" alt="icon radio"/>
              <p className="App-body">Bij 150km beweging opgeteld met je supporters , zal jullie groepummer afgespeeld worden bij de finish.</p>
            </div>
            <div className={styles.container_challenge}>
              <img className={styles.challenges__image}src="../assets/images/icons/travel.svg" alt="icon travel"/>
              <p className="App-body">Vanaf 50 supporters krijg je een gepersonaliseerd tentje.</p>
            </div>
            <div className={styles.container_challenge}>
              <img className={styles.challenges__image}src="../assets/images/icons/massage.svg" alt="icon massage"/>
              <p className="App-body">Bak met je team koekjes en verkoop ze op je stand! Je team krijgt dan een gratis massage na de finish.</p>
            </div>
            <div className={styles.container_challenge}>
              <img className={styles.challenges__image}src="../assets/images/icons/photograph.svg" alt="icon photograph"/>
              <p className="App-body">Vanaf 10 donaties voor je team krijgt elk lid een professionele groepsfoto cadeau getrokken op de race.</p>
            </div>
        </div>
      </section>

      <section className={styles.section5}>
        <div className={styles.challenges__title}>
          <p className={styles.number}>04</p>
          <p className={styles.h1}>Waarom lopen?</p>
          <p className="App-body">Borstkanker nests zich heel graag in vetcellen. Door een gezonde levensstijl en sportieve kijk op de wereld te hebben verminder je de kans op borstkanker. Het is dus een soort van preventie tegen kanker, maar natuurlijk is het niet de enigste reden waarom kanker kan opduiken.</p>
        </div>
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