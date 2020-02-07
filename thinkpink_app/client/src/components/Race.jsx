import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import {observer} from "mobx-react";
import styles from "./Race.module.css"

class Race extends Component {
    constructor(props) {
        super(props);
      }

    render() {
    const { race } = this.props;
    return (
        <div className="App-card">
            <img src={"../assets/images/cities/" + race.city  + ".png"} alt="photo city" width="160" />
            <div className={styles.race_textcontainer}>
                <p className={styles.race_city}>{race.city}</p>
                <p className={styles.race_country}>{race.country}</p>
                <div className={styles.race_quantity}>
                        <img className={styles.race_quantity__teams} src="../assets/images/icons/flag.svg" alt="flag icon"/>
                        <p>28 teams</p>

                        <img className={styles.race_quantity__people} src="../assets/images/icons/people.svg" alt="people icon"/>
                        <p>1354 people</p>
                </div>
                <p className={styles.race_date}>
                    <span className={styles.month}>{race.month}</span>
                    <span className={styles.date}>{race.date}</span>
                    <span className={styles.month}>{race.year}</span>
                </p>
            </div>
        </div>
    )
    }
}


export default (observer(Race));