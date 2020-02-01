import React from "react";
import styles from "./Info.module.css";
import NavbarWhite from "../components/NavbarWhite.jsx";
import Race from "../components/Race.jsx"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

const Info = () => {
  return (
    <div className={styles.uppercontainer}>
        <div>
          <NavbarWhite />
          <div>
            <NavLink className="App-backbutton" to={ROUTES.races}>Races</NavLink> /
            <NavLink className="App-backbutton" to={ROUTES.detail}>Antwerpen (België)</NavLink> /
            <NavLink className="App-backbutton" to={ROUTES.info}>TeamRitaVerbeek</NavLink> 
          </div>

          <section>
          <img src="../assets/images/people/rita.png" width="100" alt="profile picture"/>
            <div>
              <div>
                <p className="App-body">Rita een leuke dame uit Brugge die vorig jaar 
                  overleden is aan borstkanker.
                  Om haar herinnering in leve te houden, hebben we besloten om deel te nemen met Race for The Cure.</p><br/>
                <p className="App-body">Supporter voor Rita!</p><br/>
                <p className="App-body">Dankuwel!</p>
              </div>
              <button className="App-button_secundair-outline">Doneer aan dit team</button>
              <button className="App-button_secundair">Schrijf je in voor deze race</button>
            </div>
          
            <div>
              <img src="" alt="" />
              <div>
                <p>Teamcaptain</p>
                <p>John Doe</p>             
              </div>
            
              <img src="" alt="" />
              <div>
                <p>Groepslied</p>
                <p>SHAED ft. Zayn -Trampoline</p>             
              </div>
            
            <img src="" alt="" />
              <div>
                <p>Bakken / Dessert</p>
                <p>Brownies met witte chocolade</p>             
              </div>
            
            </div>
          </section>
        

        </div>
    </div>
  );
};

export default Info;