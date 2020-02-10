import React, {Component} from "react";
import styles from "./Detail.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { inject, observer, PropTypes } from "mobx-react";

import { ROUTES } from "../constants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink,
  useHistory,
  useLocation,
  useParams,
  NavLin
} from "react-router-dom";

class Detail extends Component  {
  constructor(props) {
    super(props);
  }
  //const { race } = this.props;
  //let { id } = useParams();
  //console.log(id);
  //const race = raceStore.findById(id);
  //const { racelijst } = raceStore;


  //console.log(raceStore.api.getById);
  //console.log(racelijst);
  // this.$store.state.workouts[$route.params.id - 1].level
  render() {

    const myRace = this.props.raceStore.findById(this.props.id);
    //console.log(`RACE ID: ${myRace.city}`);

    if (!myRace) {
      return <p>loading...</p>
    }

  return (
    <div>
      <NavbarWhite />
      <div className={styles.detail_container}>
      <NavLink className="App-backbutton" to={ROUTES.races}>&#8592; Terug naar raceoverzicht</NavLink>
      <section className={styles.detail_container_info}>
        <div className={styles.info_container_text}>
          <h1 className={styles.city_container}>
              <span className={styles.city}>{myRace.city}</span>  
            <span className={styles.country}>&nbsp; {myRace.country}</span>
          </h1>
          <div className={styles.info_container}>
              
            <div>
              <div className={styles.uppertitle_container}>
                <img src="../assets/images/icons/locationPink.svg" alt="search"/>
                <p className={styles.uppertitle}>startlocatie</p>
              </div>
              <p className={styles.info}>{myRace.startLocation}</p>
            </div>
              
            <div>
              <div className={styles.uppertitle_container}>
                <img src="../assets/images/icons/clockPink.svg" alt="search"/>
                <p className={styles.uppertitle}>starttijd</p>
              </div>
                <p className={styles.info}>{myRace.startTime}</p>
            </div>
              
            <div>
              <div className={styles.uppertitle_container}>
               <img src="../assets/images/icons/personPink.svg" alt="search"/>
               <p className={styles.uppertitle}>deelnemers</p>
              </div>
              <p className={styles.info}>1.174</p>
            </div>
              
          </div>
          <p className={styles.detail_body}>{myRace.description}</p>
            <div className={styles.primair_button}>
              <a className={styles.button_inschrijven} href="#inschrijven">Schrijf je in voor deze race</a>
          </div>
        </div>
        <div>
        <img className={styles.info_image} src={`../assets/images/cities/` + myRace.image + `_condensed.png`} alt="image city"/>
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
            <img className={styles.map} src="../assets/images/maps/map.png" alt="map" />
            <button className="App-backbutton">Send to maps</button>
          </div>
          <div className={styles.program_section}>
            <p className="App-h1-number-primaircolor">01</p>
            <h2 className="App-h1-primaircolor">Programma</h2>
            <table>
            <div>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>9u</td>
                  <td className={styles.program_activity}>daginschrijvingen + ophalen t-shirts</td>
                </tr>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>10u15</td>
                  <td className={styles.program_activity}>zumba</td>
                </tr>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>10u30</td>
                  <td className={styles.program_activity}>Kids for the Cure 800m (6-10 jaar)</td>
                </tr>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>11</td>
                  <td className={styles.program_activity}>start RUN 6km</td>
                </tr>
              </div>
            
              <div>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>11u30</td>
                  <td className={styles.program_activity}>start Walk 3km</td>
                </tr>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>12u</td>
                  <td className={styles.program_activity}>tapas-en aperitiefmoment</td>
                </tr>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>9-14u</td>
                  <td className={styles.program_activity}>Gezondheidsmarkt</td>
                </tr>
                <tr className={styles.program_tr}>
                  <td className={styles.program_time}>9-18u</td>
                  <td className={styles.program_activity}>Geef om Haar-knipdag</td>
                </tr>
              </div>   
              
            </table>
          </div>
        </section>

        <section className={styles.section2} id="inschrijven">
            <div className={styles.section2_container_title}>
              <p className="App-h1-number-primaircolor">02</p>
              <h2 className="App-h1-primaircolor">Loop voor...</h2>
              <p className={styles.info_lotgenoot}>Om je in te schrijven, dien je een lotgenoot te kiezen om te steunen. 
                Tijdens het evenement kan je op je eigen tempo lopen. Dit inschrijvingsprincipe is 
                uit solidariteit voor de mensen die kanker overleefd hebben.</p>
            </div>
            <div className="App-input_container">
            <input className="App-input_search" type="text" placeholder="Search..." />
            <button className="App-input_search__button"><img src="../assets/images/icons/search.svg" alt="search"/></button>
            </div>
          
          <div className={styles.section2_container}>
            <div className={styles.card}>
             <img className={styles.profile_detail} src="../assets/images/people/rita.png" width="100" alt="profile picture"/>
             <p className={styles.card_text}>#TeamRita Verbeeck</p>
              <div>
              <NavLink className={styles.button_secundair_outlined} to={ROUTES.info}>info</NavLink>
              <NavLink className={"App-button_secundair"} to={ROUTES.supporterorgroup}>Join Team</NavLink>
              </div>
            </div>

            <div className={styles.cardSurvivor}>
              <p className={styles.card_text2}>Nieuwe lotgenoot of Team Captain inschrijven?</p>
              <NavLink className={styles.button_white} to={ROUTES.survivororteamcaptain}>Maak een team</NavLink>
            </div>
          </div>
        </section>


        <section className={styles.section34container}>
          <div>
            <div className={styles.section3_container_title}>
             <p className="App-h1-number-primaircolor">03</p>
             <h2 className="App-h1-primaircolor">Sponsors</h2>
            </div>
            <img className={styles.sponsorlogo} src="../assets/images/sponsors/skoda.png" alt="skoda" />
            <img className={styles.sponsorlogo} src="../assets/images/sponsors/wam.png" alt="wam" />
            <img className={styles.sponsorlogo} src="../assets/images/sponsors/freemasons.png" alt="freemasons"/>
          </div>

          <div>
            <div className={styles.section3_container_title}>
             <p className="App-h1-number-primaircolor">04</p>
             <h2 className="App-h1-primaircolor">Vorige editie</h2>
            </div>
            <iframe width="640" height="480" src="https://www.youtube.com/embed/_Ta1huWC9i8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
        </div>
    </div>
  );
}
};


Detail.propTypes = {
  raceStore: PropTypes.observableObject.isRequired
};

export default inject(`raceStore`)(observer(Detail));