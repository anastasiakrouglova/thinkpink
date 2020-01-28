import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";
import logo from '../logo.svg';
import styles from './NavbarDark.module.css';

const NavbarDark = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <div className={styles.nav_link}>
                <NavLink className={styles.nav_link__text} to={ROUTES.home}>Home</NavLink> 
                <NavLink className={styles.nav_link__text} to={ROUTES.races}>Kies een race</NavLink> 
            </div>    
        </div>
    )
}

export default NavbarDark