import React from "react";
// import styles from "./Info.module.css";
import NavbarDark from "../components/NavbarDark.jsx";
import Race from "../components/Race.jsx"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Join = () => {
  return (
    <div>
        <div className="App-background-header">
              <NavbarDark />
              <p>Join page</p>
        </div>
    </div>
  );
};

export default Join;