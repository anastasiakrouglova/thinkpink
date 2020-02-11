import React, { Component } from "react";
import { observer } from "mobx-react";

import styles from "../containers/Info.module.css";

import { ROUTES } from "../constants";
import { NavLink } from "react-router-dom";



class SupporterCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { sSupporter } = this.props;
      
    return (
      <div className={styles.supporterContainer}>
        {
          sSupporter.role === 'supporter' || sSupporter.role === 'group' ? (
            <>
             {
                !sSupporter.photo ? (
                    <>
                    <img
                    src={"../assets/images/people/placeholder.png" } 
                    alt={sSupporter.placeholder}
                    width="100"
                    height="100"
                  /> 
                    </>
                ) : (
                    <img
                    src={"../assets/images/people/" + sSupporter.photo + ".png" } 
                    alt={sSupporter.photo}
                    width="100"
                    height="100"
                  /> 
                )          
              }          

              <div className={styles.containertext_supporter}>
            <h3 className={styles.bold}>{sSupporter.supporter}</h3>
             {sSupporter.typeRace === "run" ? (
              <>
                  <p className="App-body">Loper (6km)</p>
                </>
                ) : sSupporter.typeRace === "walk" ? (
                <>
                 <p className="App-body">Wandelaar (3km)</p>
                </>
                 ) : sSupporter.typeRace === "kids" ? (
                    <>
                    <p className="App-body">Kids Run (800m)</p>
                    </>            
                 ) : (
                    <>
                    </>
                  )}     
                                        
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