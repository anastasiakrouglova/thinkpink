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
          <h1>Tweede pagina van de join</h1>
        </div>
    </div>
  );
};

export default Join;