import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ROUTES } from "../constants";
// import logo from '../logo.svg';
import styles from "./NavbarWhite.module.css";
import { inject, PropTypes, observer } from "mobx-react";

const NavbarWhite = ({ uiStore, location }) => {
  const { pathname } = location;
  console.log(pathname);

  const handleLogOut = e => {
    e.preventDefault();
    uiStore.logout()
  };

  return (
    <div className={styles.nav_container}>
      {pathname === '/races' || pathname === '/' ? (
          <div className={styles.containerNavbaaar}>
          <NavLink className={styles.logoHome} to={ROUTES.home}><img src="../assets/images/logoWhite.svg" className="App-logo" alt="logo" /></NavLink>
          <div className={styles.containerNavbaaar}>
            <NavLink className={styles.nav_link__textDark} activeClassName={styles.nav_link__active} to={ROUTES.races}>Kies een race</NavLink>
            <NavLink className={styles.nav_link__textDark_mobile} activeClassName={styles.nav_link__active} to={ROUTES.home}>home</NavLink>
            <NavLink className={styles.nav_link__textDark_mobile} activeClassName={styles.nav_link__active} to={ROUTES.races}>races</NavLink>
            {!uiStore.authUser ? (
              <>
                <NavLink className={styles.nav_link__textDark_login} activeClassName={styles.nav_link__active} to={ROUTES.login}>Log in</NavLink>
                <select className={styles.nav_link__dropdownDark}>
                  <option value="numberCountry">🇧🇪&nbsp; Nederlands &nbsp;</option>
                  <option value="numberCountry">🇨🇮&nbsp; Italiano &nbsp;</option>
                  <option value="numberCountry">🇷🇺&nbsp; Русский &nbsp;</option>
                  <option value="numberCountry">🇬🇧&nbsp; English &nbsp;</option>
                  <option value="numberCountry">🇪🇸&nbsp; Español &nbsp;</option>
                </select>
              </>
            ) : (
                <>
                    <nav>
                      <ul>
                        <li><NavLink className={styles.nav_link__textDark} to='#'><img className={styles.personFoto} src="../assets/images/people/rita.png" alt="icon man" />{uiStore.authUser.name} <span className={styles.arrowdown}>&nbsp; &nbsp; &nbsp; ▼</span> </NavLink>
                          <ul>
                          <li><NavLink className={styles.nav_link__textDark_logout} activeClassName={styles.nav_link__active} onClick={handleLogOut} to={ROUTES.login}><img className={styles.logoutIcon} src="../assets/images/icons/logout.svg" alt="logout icon" />Log out</NavLink></li>
                          </ul>
                        </li>
                        <li><select className={styles.nav_link__dropdownDark}>
                          <option value="numberCountry">🇧🇪&nbsp; Nederlands &nbsp;</option>
                          <option value="numberCountry">🇨🇮&nbsp; Italiano &nbsp;</option>
                          <option value="numberCountry">🇷🇺&nbsp; Русский &nbsp;</option>
                          <option value="numberCountry">🇬🇧&nbsp; English &nbsp;</option>
                          <option value="numberCountry">🇪🇸&nbsp; Español &nbsp;</option>
                        </select>
                        </li>
                      </ul>
                    </nav>
                </>
              )}
            </div>
        </div>
      ) : (
          <div className={styles.containerNavbaaar}>
            <NavLink to={ROUTES.home}><img src="../assets/images/logo.svg" className="App-logo" alt="logo" /></NavLink>
            <div className={styles.containerNavbaaar}>
            <NavLink className={styles.nav_link__text} activeClassName={styles.nav_link__active} to={ROUTES.races}>Kies een race</NavLink>
              {!uiStore.authUser ? (
                <>
                  <NavLink className={styles.nav_link__text} activeClassName={styles.nav_link__active} to={ROUTES.login} >Log in</NavLink>
                  <select className={styles.nav_link__dropdown}>
                    <option value="numberCountry">🇧🇪&nbsp; Nederlands &nbsp;</option>
                    <option value="numberCountry">🇨🇮&nbsp; Italiano &nbsp;</option>
                    <option value="numberCountry">🇷🇺&nbsp; Русский &nbsp;</option>
                    <option value="numberCountry">🇬🇧&nbsp; English &nbsp;</option>
                    <option value="numberCountry">🇪🇸&nbsp; Español &nbsp;</option>
                  </select>
                </>
              ) : (
                  <>
                      <nav>
                        <ul>
                          <li><NavLink className={styles.nav_link__text} to='#'><img className={styles.personFoto} src="../assets/images/people/rita.png" alt="icon man" />{uiStore.authUser.name} <span className={styles.arrowdown}>&nbsp; &nbsp; &nbsp; ▼</span> </NavLink>
                            <ul>
                            <li><NavLink className={styles.nav_link__textDark_logout} activeClassName={styles.nav_link__active} onClick={handleLogOut} to={ROUTES.login}><img className={styles.logoutIcon} src="../assets/images/icons/logout.svg" alt="logout icon" />Log out</NavLink></li>
                            </ul>
                          </li>
                          <li><select className={styles.nav_link__dropdown}>
                            <option value="numberCountry">🇧🇪&nbsp; Nederlands &nbsp;</option>
                            <option value="numberCountry">🇨🇮&nbsp; Italiano &nbsp;</option>
                            <option value="numberCountry">🇷🇺&nbsp; Русский &nbsp;</option>
                            <option value="numberCountry">🇬🇧&nbsp; English &nbsp;</option>
                            <option value="numberCountry">🇪🇸&nbsp; Español &nbsp;</option>
                          </select>
                          </li>
                        </ul>
                      </nav>
                  </>
                )}
              </div>
          </div>
        )
      }
    </div>
  );
};

export default inject(`uiStore`)(withRouter(observer(NavbarWhite)));
