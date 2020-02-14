import React, { Component } from "react";
import styles from "./Info.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { inject, observer, PropTypes } from "mobx-react";
import TextField from "@material-ui/core/TextField";
import Footer from "../components/Footer.jsx";

import SupporterCard from "../components/SupporterCard.jsx";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: true };
  }

  setEditMode = value => this.setState({ edit: value });

  render() {
    const myLotgenoot = this.props.subscriptionStore.findById(this.props.id);
    const mysubscriptionLijst = this.props.subscriptionStore.subscriptionlijst;

    if (!myLotgenoot) {
      return <p>loading...</p>;
    }

    const { edit } = this.state;
    const { sLotgenoot, onUpdate } = this.props;

    return (
      <div className={styles.uppercontainer}>
        <NavbarWhite />
        <div className={styles.uppersubcontainer}>
          <div className={styles.navlink_top}>
            <NavLink className="App-backbutton_back" to={ROUTES.races}>
              Races
            </NavLink>
            &nbsp;/&nbsp;
            <NavLink className="App-backbutton_back" to={ROUTES.races}>
              Antwerpen (België)
            </NavLink>
            &nbsp;/&nbsp;
            <NavLink className="App-backbutton" to="#">
              #team{myLotgenoot.teamName}
            </NavLink>
          </div>

          {edit ? (
            <div className={styles.containerGlobal}>
              <section className={styles.card_container}>
                <div className={styles.fotocontainer}>
                  <img
                    className={styles.profilepictureRita}
                    src={
                      "../assets/images/people/" + myLotgenoot.photo + ".png"
                    }
                    alt="profile picture"
                  />
                </div>
                <div className= {styles.buttonGigacontianer}>
                  <div>
                    <p className={styles.hashtag}>
                      #Team{myLotgenoot.teamName}
                    </p>
                    <p className={styles.text_person}>
                      {myLotgenoot.description}
                    </p>
                  </div>
                  <div className={styles.buttonInfo}>
                    <button className={styles.eerstebutton}>
                      Doneer aan dit team
                    </button>
                    <NavLink
                      className={styles.tweedebutton}
                      to={ROUTES.supporterorgroup}>
                      Schrijf je in voor deze race
                    </NavLink>
                  </div>
                </div>

                <div className={styles.card_extraInfo}>
                  <div className={styles.info_person_container}>
                    <img
                      className={styles.info_icon__teamcaptain}
                      src="../assets/images/icons/crown.svg"
                      alt="crown icon"
                    />
                    <div>
                      <p className="App-body-bold">Teamcaptain/lotgenoot</p>
                      <p className={styles.info_musicname}>
                        {myLotgenoot.teamCaptain}
                      </p>
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
                        {myLotgenoot.teamSong}
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
                        {myLotgenoot.dessert}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles.buttonContainer_bewerken}>
                <button
                  className="App-bewerkAccount"
                  onClick={() => this.setState({ edit: false })}
                >
                  Bewerk account
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.containerGlobal}>
              <section className={styles.card_container}>
                <div className={styles.fotocontainer}>
                  <img
                    className={styles.profilepictureRita}
                    src={
                      "../assets/images/people/" + myLotgenoot.photo + ".png"
                    }
                    alt="profile picture"
                  />
                </div>
                <div>
                  <div className={styles.hashtag_textfield}>
                    <TextField
                      fullWidth
                      value={myLotgenoot.teamName}
                      id="outlined-basic"
                      label="teamName"
                      variant="outlined"
                      onChange={e => myLotgenoot.setTeamName(e.target.value)}
                    />
                    {/* <p className={styles.hashtag}>#Team{myLotgenoot.teamName}</p> */}
                    <div className={styles.textfieldBig_container}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Vertel over jezelf"
                        multiline
                        rows="4"
                        defaultValue={myLotgenoot.description}
                        variant="outlined"
                        fullWidth
                        onChange={e =>
                          myLotgenoot.setDescription(e.target.value)
                        }
                      />
                    </div>
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
                      <TextField
                        fullWidth
                        value={myLotgenoot.teamCaptain}
                        id="outlined-basic"
                        label="teamCaptain/lotgenoot"
                        variant="outlined"
                        onChange={e =>
                          myLotgenoot.setTeamCamptain(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className={styles.info_person_container}>
                    <img
                      className={styles.info_icon__music}
                      src="../assets/images/icons/song.svg"
                      alt="song"
                    />
                    <div>
                      <TextField
                        fullWidth
                        value={myLotgenoot.teamSong}
                        id="outlined-basic"
                        label="teamCaptain/lotgenoot"
                        variant="outlined"
                        onChange={e => myLotgenoot.setTeamSong(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.info_person_container}>
                    <img
                      className={styles.info_icon}
                      src="../assets/images/icons/dessert.svg"
                      alt="dessert"
                    />
                    <div>
                      <TextField
                        fullWidth
                        value={myLotgenoot.dessert}
                        id="outlined-basic"
                        label="teamCaptain/lotgenoot"
                        variant="outlined"
                        onChange={e => myLotgenoot.setDessert(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div className={styles.buttonContainer_bewerken}>
                <button
                  className="App-bewerkAccount"
                  onClick={() => this.setState({ edit: true })}
                >
                  Opslaan
                </button>
              </div>
              {/* <button className={styles.save} onClick={() => { onUpdate(sLotgenoot); this.setEditMode(false); }}>save</button>           */}
            </div>
          )}

          <section className={styles.section2}>
            <p className={styles.numberrr}>01</p>
            <h2 className={styles.h2hierzo}>
              Deze mensen lopen mee voor Rita
            </h2>
            <p className={styles.subtitle}>(38 supporters, 124 km samen)</p>
            <div className={styles.supporterContainer}>
              {mysubscriptionLijst.map((sSupporter, index) =>
                myLotgenoot.teamName === sSupporter.teamName ? (
                  <SupporterCard key={index} sSupporter={sSupporter} />
                ) : (
                  <></>
                )
              )}
            </div>
          </section>

          <section className={styles.section2}>
            <p className={styles.numberrr}>02</p>
            <h2 className={styles.h2hierzo}>
              Supporters van het thuisfront
            </h2>
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

          <section className={styles.section3}>
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
        <Footer />
      </div>
    );
  }
}

Info.propTypes = {
  subscriptionStore: PropTypes.observableObject.isRequired
};

export default inject(`subscriptionStore`)(observer(Info));
