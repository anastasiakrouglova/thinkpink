import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ROUTES } from "../constants";

import '../styles/App.css';
import Home from "./Home";
import Races from "./Races";
import Detail from "./Detail";
import Info from "./Info";
import Join from "./Join";
import Join2 from "./Join2";

class App extends Component {
  render() {
  return (
    <main className="App-header">
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.races} component={Races} />
        <Route path={ROUTES.detail} component={Detail} />
        <Route path={ROUTES.info} component={Info} />
        <Route path={ROUTES.join} component={Join} />
        <Route path={ROUTES.join2} component={Join2} />
      </Switch>
    </main>
  );
  }
}

export default withRouter(App);
