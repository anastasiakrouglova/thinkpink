import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ROUTES } from "../constants";

import '../styles/App.css';
import Home from "./Home";
import Races from "./Races";
import Detail from "./Detail";
import Info from "./Info";
import SurvivorOrTeamcaptain from "./SurvivorOrTeamcaptain";
import Signup from "./Signup";
import Login from "./Login";
import SupporterOrGroup from "./SupporterOrGroup";

import FormWelcome from "./FormWelcome";
import FormInfo from "./FormInfo";

class App extends Component {
  render() {
  return (
    <main className="App-header">
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.races} component={Races} />

        {/* <Route path={ROUTES.detail} exact component={Detail} /> */}

        <Route
            path={ROUTES.detail}
            render={({ match }) => <Detail id={match.params.id} />}
          />
        <Route
            path={ROUTES.info}
            render={({ match }) => <Info id={match.params.id} />}
          />
        {/* <Route path={ROUTES.info} component={Info} /> */}
        
        <Route path={ROUTES.survivororteamcaptain} component={SurvivorOrTeamcaptain} />
        <Route path={ROUTES.supporterorgroup} component={SupporterOrGroup} />
        <Route path={ROUTES.signup} component={Signup} />
        <Route path={ROUTES.login} component={Login} />

        <Route path={ROUTES.formwelcome} component={FormWelcome} />
        <Route path={ROUTES.forminfo} component={FormInfo} />
        
      </Switch>
    </main>
  );
  }
}

export default withRouter(App);
