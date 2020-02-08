import RaceStore from "./RaceStore";
import UiStore from "./UiStore";
// import AuthStore from "./AuthStore";
// import AdminStore from "./AdminStore";

class Store {
  constructor() {
    this.raceStore = new RaceStore(this);
    this.uiStore = new UiStore(this);
    // this.showStore = new ShowStore(this);
    // this.adminStore = new AdminStore(this);
  }
}

export default new Store();