import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ROUTES } from "../constants";

import '../styles/App.css';
import Home from "./Home";
import Races from "./Races";
import Detail from "./Detail";
import Info from "./Info";
import SurvivorOrTeamcaptain from "./SurvivorOrTeamcaptain";
import Lotgenoot2 from "./Lotgenoot2";
import SupporterOrGroup from "./SupporterOrGroup";

class App extends Component {
  render() {
  return (
    <main className="App-header">
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.races} component={Races} />
        <Route path={ROUTES.detail} component={Detail} />
        <Route path={ROUTES.info} component={Info} />
        <Route path={ROUTES.survivororteamcaptain} component={SurvivorOrTeamcaptain} />
        <Route path={ROUTES.supporterorgroup} component={SupporterOrGroup} />
        <Route path={ROUTES.lotgenoot2} component={Lotgenoot2} />
      </Switch>
    </main>
  );
  }
}

export default withRouter(App);
