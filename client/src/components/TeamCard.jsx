import React, { Component } from "react";
import { observer } from "mobx-react";

import styles from "../containers/Detail.module.css";

import { ROUTES } from "../constants";
import { NavLink } from "react-router-dom";

class TeamCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sLotgenoot } = this.props;
    return (
      <div>
        {
          sLotgenoot.role === 'lotgenoot' || sLotgenoot.role === 'teamCaptain' ? (
            <>
              <div className={styles.card}>
                <img
                  className={styles.profile_detail}
                  src="../assets/images/people/rita.png"
                  width="100"
                  alt="profile picture"
                />
                <p className={styles.card_text}>#{sLotgenoot.teamName}</p>
                <div>
                  <NavLink
                    className={styles.button_secundair_outlined}
                    to={ROUTES.info}
                  >
                    info
                  </NavLink>
                  <NavLink
                    className={"App-button_secundair"}
                    to={ROUTES.supporterorgroup}
                  >
                    Join Team
                  </NavLink>
                </div>
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

export default observer(TeamCard);