import React from "react";
// import styles from "./Info.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Race from "../components/Race.jsx"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Join = () => {
  return (
    <div>
        <div>
          <NavbarWhite />
          <h1>Bedankt voor je enthousiasme!</h1>
          <p>kies hoe je een lotgenoot wilt toevoegen:</p>

          <div>
          <NavLink to={ROUTES.lotgenoot2}>
              <p>Ik ben een <span>lotgenoot</span> en wil mijn eigen pagina onderhouden</p>
              <p>€15</p>
              <button>registreer lotgenoot</button>
            </NavLink>
            <NavLink to={ROUTES.lotgenoot2}>
            <p>Ik ben een <span>Team Captain</span> en wil een pagina aanmaken voor een lotgenoot die ik ken</p>
              <p>excl. ticket lotgenoot</p>
              <p>€15</p>
              <button>registreer een teamcaptain</button>
            </NavLink>
          </div>
          <div>
          <NavLink to={ROUTES.detail}>terug</NavLink>
          </div>
        </div>
    </div>
  );
};

export default Join;