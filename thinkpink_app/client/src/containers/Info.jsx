import React from "react";
import styles from "./Info.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { inject, observer, PropTypes } from "mobx-react";

const Info = ({ uiStore }) => {
  console.log(uiStore);
  return (
    <div className={styles.uppercontainer}>
      <NavbarWhite />
      <div className={styles.uppersubcontainer}>
        <div className={styles.navlink_top}>
          <NavLink className="App-backbutton_back" to={ROUTES.races}>
            Races
          </NavLink>
          &nbsp;/&nbsp;
          <NavLink className="App-backbutton_back" to={ROUTES.detail}>
            Antwerpen (België)
          </NavLink>
          &nbsp;/&nbsp;
          <NavLink className="App-backbutton" to={ROUTES.info}>
            TeamRitaVerbeek
          </NavLink>
        </div>
        <div className={styles.containerGlobal}>
          <section className={styles.card_container}>
            <div className={styles.fotocontainer}>
              <img className={styles.profilepictureRita}
                src="../assets/images/people/rita.png"
                width="150"
                height="150"
                alt="profile picture"
              />
            </div>
            <div>
              <div>
              <p className={styles.hashtag}>#TeamRitaVerbeek</p>
                <p className={styles.tekst_person}>
                  Rita een leuke dame uit Brugge die vorig jaar overleden is aan
                  borstkanker. Om haar herinnering in leve te houden, hebben we
                  besloten om deel te nemen met Race for the Cure.
                </p>
                <br />
                <p className={styles.tekst_person}>
                  Supporter voor Rita!
                  <br/> Dankuwel!
                </p>
              </div>
              <div className={styles.buttonInfo}>
                <button className="App-button_secundair-outline">
                  Doneer aan dit team
                </button>
                <NavLink className="App-button_secundair" to={ROUTES.supporterorgroup}>Schrijf je in voor deze race</NavLink>
              </div>
            </div>

            <div>
              <div className={styles.info_person_container}>
                <img
                  className={styles.info_icon__teamcaptain}
                  src="../assets/images/icons/crown.svg"
                  alt="crown icon"
                />
                <div>
                  <p className="App-body-bold">Teamcaptain</p>
                  <p className={styles.info_musicname}>John Doe</p>
                </div>
              </div>
              <div className={styles.info_person_container}>
                <img
                  className={styles.info_icon__music}
                  src="../assets/images/icons/song.svg"
                  alt="song"
                />
                <div>
                  <p className="App-body-bold">Groepslied</p>
                  <p className={styles.info_musicname}>
                    SHAED ft. Zayn -Trampoline
                  </p>
                </div>
              </div>
              <div className={styles.info_person_container}>
                <img
                  className={styles.info_icon}
                  src="../assets/images/icons/dessert.svg"
                  alt="dessert"
                />
                <div>
                  <p className="App-body-bold">Bakken / Dessert</p>
                  <p className={styles.info_musicname}>
                    Brownies met witte chocolade
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.section2}>
          <p className="App-h1-number-primaircolor">01</p>
          <h2 className="App-h1-primaircolor">
            Deze mensen lopen mee voor Rita
          </h2>
          <p className={styles.subtitle}>(38 supporters, 124 km samen)</p>
          <div className={styles.supporterContainer}>

          {/* {
            uiStore.map(race => (
              <NavLink key={race.id} race={race} className={styles.navlink} to={`/detail/${race.id}`}><Race key={race.id} race={race}/></NavLink> 
            ))
          } */}
            <img
              src="../assets/images/people/dirk.png"
              alt="dirk"
              width="100"
              height="100"
            />
            <div className={styles.containertext}>
              <h3 className={styles.bold}>Dirk Vanpraet</h3>
              <p className="App-body">Loper (6km)</p>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <p className="App-h1-number-primaircolor">02</p>
          <h2 className="App-h1-primaircolor">Supporters van het thuisfront</h2>
          <p className={styles.subtitle}>(3 donaties)</p>
          <div className={styles.supporterContainer}>
            <img
              src="../assets/images/people/donors.svg"
              alt="dirk"
              width="100"
              height="100"
            />
            <div className={styles.containertext}>
              <h3 className={styles.bold2}>€25</h3>
              <p className={styles.cursief}>
                Van Johanna Biesebos op 02/10/2019
              </p>
              <p className="App-body">
                “Doe dat goed meisjes! Veel kusjes van tante Johanna”
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section2}>
          <p className="App-h1-number-primaircolor">03</p>
          <h2 className="App-h1-primaircolor">Uitdagingen</h2>
          <p className={styles.subtitle}>
            Hieronder vind je de groepschallenges. Ontgrendel hierdoor leuke
            extraatjes tijdens Race For The Cure.
          </p>

          <div className={styles.containerChallenges}>
            <article className={styles.card_container_challenge}>
              <div className={styles.supporterContainer_challenge}>
                <img
                  className={styles.imgChallenge}
                  src="../assets/images/icons/radioblack.svg"
                  alt="radio"
                  width="100"
                  height="100"
                />
                <div className={styles.containertext}>
                  <p className="App-body">
                    Bij 100km beweging samen met je supporters , zal jullie
                    groepslied afgespeeld worden bij de finish.
                  </p>
                  <div className={styles.barcontainer}>
                    <ProgressBar
                      percent={49}
                      unfilledBackground="#204A52"
                      filledBackground="linear-gradient(to right, #2E6B77, #5BA4AF)"
                      width="20rem"
                      height="1rem"
                    />
                    <p className={styles.progress_aantal}>49/100</p>
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.card_container_challenge}>
              <div className={styles.supporterContainer_challenge}>
                <img
                  className={styles.imgChallenge}
                  src="../assets/images/icons/travelblack.svg"
                  alt="tent"
                  width="100"
                  height="100"
                />
                <div className={styles.containertext}>
                  <p className="App-body">
                    Vanaf 50 supporters krijg je een gepersonaliseerd tentje.
                  </p>
                  <div className={styles.barcontainer}>
                    <ProgressBar
                      percent={20}
                      unfilledBackground="#204A52"
                      filledBackground="linear-gradient(to right, #2E6B77, #5BA4AF)"
                      width="20rem"
                      height="1rem"
                    />
                    <p className={styles.progress_aantal}>10/50</p>
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.card_container_challenge}>
              <div className={styles.supporterContainer_challenge}>
                <img
                  className={styles.imgChallenge}
                  src="../assets/images/icons/massageblack.svg"
                  alt="radio"
                  width="100"
                  height="100"
                />
                <div className={styles.containertext}>
                  <p className="App-body">
                    Bak met je team koekjes en verkoop ze op je stand! Je team
                    krijgt dan een gratis massage na de finish.
                  </p>
                  <div className={styles.barcontainer}>
                    {/* <label className={styles.container}> */}
                    <img
                      src="../assets/images/icons/checkbox.svg"
                      alt="checkbox"
                    />
                    <span className={styles.pinkcheckbox} htmlFor="dessert">
                      Brownies met witte chocolade
                    </span>
                    {/* <input checked="checked" id="dessert" type="checkbox" /> */}
                    {/* <span class="checkmark"></span> */}
                    {/* </label> */}
                  </div>
                </div>
              </div>
            </article>

            <article className={styles.card_container_challenge}>
              <div className={styles.supporterContainer_challenge}>
                <img
                  className={styles.imgChallenge}
                  src="../assets/images/icons/photographblack.svg"
                  alt="radio"
                  width="100"
                  height="100"
                />
                <div className={styles.containertext}>
                  <p className="App-body">
                    Vanaf 10 donaties voor je team krijgt elk lid een
                    professionele groepsfoto cadeau getrokken op de race.
                  </p>
                  <div className={styles.barcontainer}>
                    <ProgressBar
                      percent={30}
                      unfilledBackground="#204A52"
                      filledBackground="linear-gradient(to right, #2E6B77, #5BA4AF)"
                      width="20rem"
                      height="1rem"
                    />
                    <p className={styles.progress_aantal}>3/10</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};


Info.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Info));
