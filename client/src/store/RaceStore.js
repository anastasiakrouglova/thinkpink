import {
  decorate,
  observable,
  configure,
  action,
  runInAction,
  computed
} from "mobx";
import Api from "../api";
import Race from "../models/Race";

configure({ enforceActions: `observed` });

class RaceStore {
  racelijst = [];
  role = `Teamcaptain [hardcoded]`;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`races`);
    this.getAll();
  }

  getAll = () => {
    // console.log(`get all races!`);
    this.api.getAll().then(d => d.forEach(this._addRace));
  };

  _addRace = values => {
    //console.log(values);
    const race = new Race();
    race.updateFromServer(values);
    runInAction(() => this.racelijst.push(race));
    //console.log(this.racelijst);
  };


  findById = id => {
    //console.log(this.racelijst);
    //console.log(id);
    const race = this.racelijst.find(check => check.id === id);
    console.log(race);
    if (!race) {
      this.api.getById(id).then(this._addRace);
    }
    //console.log(this.api.getById(id).then(this._addRace));

    return race;
  };
}

decorate(RaceStore, {
  racelijst: observable,
  getAll: action,
  _addRace: action
});

export default RaceStore;
