import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import logo from '../logo.svg';
import styles from './NavbarWhite.module.css';


const NavbarWhite = () => {
    return (
        <div className={styles.nav_container}>
                <NavLink to={ROUTES.home}><img src={logo} className="App-logo" alt="logo" /></NavLink> 
                <div className={styles.nav_link}>
                    <NavLink className={styles.nav_link__text} activeClassName={styles.nav_link__active}  to={ROUTES.home}>Home</NavLink> 
                    <NavLink className={styles.nav_link__text} activeClassName={styles.nav_link__active} to={ROUTES.races}>Kies een race</NavLink> 
                    <img src="../assets/images/flags/nederlands.svg" className={styles.language_flag} alt="language flag" />   
                    <select className={styles.nav_link__dropdown}>
                        <option value="Nederlands">Nederlands &nbsp;</option>
                        <option value="English">English &nbsp;</option>
                        <option value="Русский">Русский &nbsp;</option>
                        <option value="Español">Español &nbsp;</option>
                        <option value="Italiano">Italiano &nbsp;</option>
                    </select>
                </div>
        </div>
    )
}

export default NavbarWhite