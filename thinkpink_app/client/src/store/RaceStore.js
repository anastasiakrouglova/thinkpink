import { decorate, observable, configure, action, runInAction, computed } from "mobx";
import Api from "../api/index.js";
import Race from "../models/Race";

configure({ enforceActions: `observed` });

class RaceStore {

  role = `Teamcaptain [hardcoded]`;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`race`);
    console.log(this.api.getAll());
    //this.api.getAll().then(d => d.forEach(this._addRace));
  }

  _addRace = values => {
    const race = new Race();
    race.updateFromServer(values);
    runInAction(() => this.racelijst.push(race));
  };
}

decorate(RaceStore, {});

export default RaceStore;