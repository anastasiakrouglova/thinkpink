import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import logo from '../logo.svg';
import styles from './NavbarDark.module.css';


const NavbarDark = () => {
    return (
        <div className={styles.nav_container}>
                <NavLink to={ROUTES.home}><img src={logo} className="App-logo" alt="logo" /></NavLink> 
                <div className={styles.nav_link}>
                    <NavLink className={styles.nav_link__text} activeClassName={styles.nav_link__active} to={ROUTES.races}>Kies een race</NavLink> 
                    <NavLink className={styles.nav_link__text} activeClassName={styles.nav_link__active} to={ROUTES.login}><img className={styles.personIcon} src="../assets/images/icons/peopleWhite.svg" alt="icon man"/>Log in</NavLink>
                <select className={styles.nav_link__dropdown}>
                        <option value="numberCountry">🇧🇪&nbsp; Nederlands &nbsp;</option>
                        <option value="numberCountry">🇨🇮&nbsp; Italiano &nbsp;</option>
                        <option value="numberCountry">🇷🇺&nbsp; Русский &nbsp;</option>
                        <option value="numberCountry">🇬🇧&nbsp; English &nbsp;</option>
                        <option value="numberCountry">🇪🇸&nbsp; Español &nbsp;</option>
                    </select>
                </div>
        </div>
    )
}

export default NavbarDark