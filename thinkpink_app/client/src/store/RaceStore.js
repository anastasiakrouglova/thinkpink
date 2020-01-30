import { configure, decorate, action, observable, runInAction } from "mobx";


configure({ enforceActions: `observed` });

class RaceStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
}

decorate(RaceStore, {});

export default RaceStore;