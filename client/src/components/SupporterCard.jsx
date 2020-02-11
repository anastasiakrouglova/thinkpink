import React, { Component } from "react";
import { observer } from "mobx-react";

import styles from "../containers/Detail.module.css";

import { ROUTES } from "../constants";
import { NavLink } from "react-router-dom";



class SupporterCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { sSupporter } = this.props;
      
    return (
      <div>
        {
          sSupporter.role === 'supporter' && sSupporter.teamName === 'Hyena' || sSupporter.role === 'group' ? (
            <>
              <img
                src="../assets/images/people/dirk.png"
                alt="dirk"
                width="100"
                height="100"
              />
              <div className={styles.containertext}>
                <h3 className={styles.bold}>Dirk Vanpraet</h3>
                <p className="App-body">Loper (6km) {sSupporter.teamName}</p>
              </div>
            </>
          ) : (
          <>
          </>
        )
      }

      </div>
    );
  }
}

export default observer(SupporterCard);