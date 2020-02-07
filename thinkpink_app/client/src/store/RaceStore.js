import { decorate, observable, configure, action, runInAction, computed } from "mobx";
import Api from "../api/index.js";
import Race from "../models/Race";

configure({ enforceActions: `observed` });

class RaceStore {
  racelijst = [];
  role = `Teamcaptain [hardcoded]`;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`race`);
    this.api.getAll().then(d => d.forEach(this._addRace));
  }

  _addRace = values => {
    const race = new Race();
    race.updateFromServer(values);
    runInAction(() => this.racelijst.push(race));
    console.log(this.racelijst);
  };
}

decorate(RaceStore, {
  racelijst: observable
});

export default RaceStore;