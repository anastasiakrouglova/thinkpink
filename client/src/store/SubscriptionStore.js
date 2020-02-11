import {
    decorate,
    observable,
    configure,
    action,
    runInAction,
    computed
} from "mobx";
  
  import SubscriptionsApi from "../api/subscriptions";
  import Subscription from "../models/Subscription";
  
  configure({ enforceActions: `observed` });
  
  class SubscriptionStore {
    subscriptionlijst = [];
    //role = `Teamcaptain [hardcoded]`;
  
    constructor(rootStore) {
      this.rootStore = rootStore;
      this.subscriptionsApi = new SubscriptionsApi(`subscriptions`);
        this.getAll();
        console.log(this.subscriptionlijst);
    }
  
    getAll = () => {
      // console.log(`get all races!`);
      this.subscriptionsApi.getAll().then(d => d.forEach(this._addSubscription));
    };
  
    _addSubscription = values => {
      //console.log(values);
      const subscription = new Subscription();
      subscription.updateFromServer(values);
      runInAction(() => this.subscriptionlijst.push(subscription));
      //console.log(this.racelijst);
    };
      
      
  
    // getOne = id => {
    //   this.api.getById(id).then(d => this._addRace(d));
  
    //   console.log(this.api.getById(id));
    // };
  
    // findById = id => {
    //   //console.log(this.racelijst);
    //   //console.log(id);
    //   const race = this.racelijst.find(check => check.id === id);
    //   //console.log(race);
    //   if (!race) {
    //     this.api.getById(id).then(this._addRace);
    //   }
    //   //console.log(this.api.getById(id).then(this._addRace));
  
    //   return race;
    // };
  }
  
//   decorate(RaceStore, {
//     racelijst: observable,
//     getAll: action,
//     _addRace: action,
//     findById: action
//   });
  
  export default SubscriptionStore;