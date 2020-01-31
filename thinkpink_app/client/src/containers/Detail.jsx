import React from "react";
import styles from "./Detail.module.css";
import NavbarDark from "../components/NavbarDark.jsx";

import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Detail = () => {
  return (
    <div>
      <NavbarDark />
      <div className={styles.detail_container}>
      <NavLink className={styles.backButton} to={ROUTES.races}>&#8592; Terug naar raceoverzicht</NavLink>
      <section className={styles.detail_container_info}>
        <div>
          <h1 className={styles.city_container}>
            <span className={styles.city}>Antwerpen</span>  
            <span className={styles.country}>&nbsp; (België)</span>
          </h1>
          <div className={styles.info_container}>
              
            <div>
              <div className={styles.uppertitle_container}>
                <img src="../assets/images/icons/locationPink.svg" alt="search"/>
                <p className={styles.uppertitle}>Startlocatie</p>
              </div>
              <p className={styles.info}>Graanmarkt</p>
            </div>
              
            <div>
              <div className={styles.uppertitle_container}>
                <img src="../assets/images/icons/clockPink.svg" alt="search"/>
                <p className={styles.uppertitle}>Starttijd</p>
              </div>
              <p className={styles.info}>11:00 uur</p>
            </div>
              
            <div>
              <div className={styles.uppertitle_container}>
               <img src="../assets/images/icons/personPink.svg" alt="search"/>
               <p className={styles.uppertitle}>Deelnemers</p>
              </div>
              <p className={styles.info}>1.174</p>
            </div>
              
          </div>
          <p className={styles.detail_body}>Dit jaar start Race For The Cure in Antwerpen op de mooie Graanmarkt. Het parcours is langs de mooiste plekjes van de Belgische havenstad. We zullen rond  sommige van de bekende momenumenten tegenkomen zoals het stadhuis en Sint-Andrieskerk. 
            Geniet van dit onvergetelijk moment dat draait rond liefde met je eigen groep.</p>
          <button className="App-button_primair">Schrijf je in voor deze race</button>
        </div>
        <div>
        <img className={styles.info_image} src="../assets/images/cities/antwerpen_condensed.png" alt="image city"/>
          <div className={styles.counter_container}>
            <div className={styles.days_container}>
              <div className={styles.days_number}>04</div>
              <div className={styles.days}>dagen</div>
            </div>
            <div className={styles.days_container}>
              <div className={styles.days_number}>03</div>
              <div className={styles.days}>uren</div>
            </div>
            <div className={styles.days_container}>
              <div className={styles.days_number}>03</div>
              <div className={styles.days}>minuten</div>
            </div>
          </div>
        </div>
        </section>

        <section className={styles.container_program}>
          <div className={styles.container_map}>
            <img src="../assets/images/maps/map.png" alt="map" />
            <button className={styles.backButton}>Send to maps</button>
          </div>
          <div>
            <p className="App-h1-number-primaircolor">01</p>
            <h2 className="App-h1-primaircolor">Programma</h2>
            <table>
            <div>
                <tr>
                  <td>9u</td>
                  <td>Daginschrijvingen + Ophalen t-shirts</td>
                </tr>
                <tr>
                  <td>10u15</td>
                  <td>Zumba</td>
                </tr>
                <tr>
                  <td>10u30</td>
                  <td>Kids for the Cure 800m (6-10 jaar)</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Start RUN 6km</td>
                </tr>
              </div>
            
              <div>
                <tr>
                  <td>11u30</td>
                  <td>Start Walk 3km</td>
                </tr>
                <tr>
                  <td>12u</td>
                  <td>Tapas-en aperitiefmoment</td>
                </tr>
                <tr>
                  <td>9-14u</td>
                  <td>Gezondheidsmarkt</td>
                </tr>
                <tr>
                  <td>9-18u</td>
                  <td>Geef om Haar-knipdag</td>
                </tr>
              </div>   
              
            </table>
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.section2_container_title}>
            <p className="App-h1-number-primaircolor">02</p>
            <h2 className="App-h1-primaircolor">Loop voor...</h2>
            <p className="App-body">Om je in te schrijven dien je een lotgenoot te kiezen om te steunen. Tijdens het evenement kan je op je eigen tempo lopen. Dit inschrijvingsprincipe is uit solidariteit voor de mensen die kanker overleefd hebben.</p>
          </div>
          <div className="App-input_container">
          <input className="App-input_search" type="text" placeholder="Search..." />
          <button className="App-input_search__button"><img src="../assets/images/icons/search.svg" alt="search"/></button>
        </div>
          
          
          <div className={styles.card}>
            <img className={styles.profile_detail} src="../assets/images/people/rita.png" width="100" alt="profile picture"/>
            <p className={styles.card_text}>#TeamRita Verbeeck</p>
            <div>
            <button className="App-button_secundair-outline">info</button>
              <button className="App-button_secundair">Join Team</button>
              </div>
          </div>

        
        
        </section>


        </div>
    </div>
  );
};

export default Detail;