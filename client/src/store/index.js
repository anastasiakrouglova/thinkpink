import RaceStore from "./RaceStore";
import UiStore from "./UiStore";
import SubscriptionStore from "./SubscriptionStore";
// import AdminStore from "./AdminStore";

class Store {
  constructor() {
    this.raceStore = new RaceStore(this);
    this.uiStore = new UiStore(this);
    this.subscriptionStore = new SubscriptionStore(this);
    // this.adminStore = new AdminStore(this);
  }
}

export default new Store();