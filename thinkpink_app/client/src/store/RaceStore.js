import { configure, decorate, action, observable, runInAction } from "mobx";


configure({ enforceActions: `observed` });

class RaceStore {

  role = `Teamcaptain [hardcoded]`;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

decorate(RaceStore, {});

export default RaceStore;