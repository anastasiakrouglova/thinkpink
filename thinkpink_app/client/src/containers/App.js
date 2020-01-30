import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ROUTES } from "../constants";

import '../styles/App.css';
import Home from "./Home";
import Races from "./Races";
import Detail from "./Detail";

class App extends Component {
  render() {
  return (
    <main className="App-header">
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.races} component={Races} />
        <Route path={ROUTES.detail} component={Detail} />
      </Switch>
    </main>
  );
  }
}

export default withRouter(App);
