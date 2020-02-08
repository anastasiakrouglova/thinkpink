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


  getOne = id => {
    this.api.getById(id).then(d => this._addRace(d));

    console.log(id);
  };


  findById = id => {
    console.log(this.racelijst);
    //const racelijst = this.racelijst;
    const race = this.racelijst.find(test => test._id === id);
    console.log(race);

    if (!race) {
      this.api.getById(id).then(this._addrace);
    }
    console.log(this.api.getById(id).then(this._addrace));

    return race;
  };
}

decorate(RaceStore, {
  racelijst: observable,
  _addRace: action,
});

export default RaceStore;