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
          <p>Kies hoe je je wilt inschrijven:</p>

        <NavLink to="ROUTES.join2">
          <p>Ik wil graag <span>alleen</span> deelnemen</p>
          <p>€15</p>
          <button>registreer supporter</button>
        </NavLink>
        <NavLink to="ROUTES.join2">
        <p>Ik wil graag <span>een groep</span> inschrijven</p>
          <p>excl. ticket lotgenoot</p>
          <p>€15</p>
          <button>registreer een teamcaptain</button>
          
        </NavLink>
        </div>
    </div>
  );
};

export default Join;