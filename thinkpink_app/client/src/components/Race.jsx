import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import styles from "./Race.module.css"

const Race = () => {
    return (
        <div className="App-card">
            <img src="../assets/images/cities/antwerpen.png" alt="photo city" width="150" />
            <div className={styles.race_textcontainer}>
                <p className={styles.race_city}>Antwerpen</p>
                <p className={styles.race_country}>België</p>
                <div className={styles.race_quantity}>
                        <img className={styles.race_quantity__teams} src="../assets/images/icons/flag.svg" alt="flag icon"/>
                        <p>28 teams</p>

                        <img className={styles.race_quantity__people} src="../assets/images/icons/people.svg" alt="people icon"/>
                        <p >1354 people</p>
                </div>
                <p className={styles.race_date}>
                    <span>sept - </span>
                    <span>27 - </span>
                    <span>2020</span>
                </p>
            </div>
        </div>
    )
}


export default Race