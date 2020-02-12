import React, { Component } from "react";
import { observer } from "mobx-react";

import styles from "./Footer.module.css";

import { ROUTES } from "../constants";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.footercontainer}>
            <a target="_blank" className={styles.link} href="https://www.think-pink.be/nl/Terms">Algemene voorwaarden</a>
            <a target="_blank" className={styles.link} href="https://www.think-pink.be/nl/Privacy">Privacy policy</a>
      </div>
    );
  }
}

export default observer(Footer);