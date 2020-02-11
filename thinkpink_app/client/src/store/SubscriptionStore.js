import {
    decorate,
    observable,
    configure,
    action,
    runInAction,
    computed
} from "mobx";
  
  import SubscriptionsApi from "../api/subscriptions";
  //import Subscription from "../models/Subscription";
  
  configure({ enforceActions: `observed` });
  
  class SubscriptionStore {
    //racelijst = [];
    //role = `Teamcaptain [hardcoded]`;
  
    constructor(rootStore) {
      this.rootStore = rootStore;
      this.subscriptionsApi = new SubscriptionsApi(`subscriptions`);
      //this.getAll();
    }
  
    // getAll = () => {
    //   // console.log(`get all races!`);
    //   this.api.getAll().then(d => d.forEach(this._addRace));
    // };
  
    // _addRace = values => {
    //   //console.log(values);
    //   const race = new Race();
    //   race.updateFromServer(values);
    //   runInAction(() => this.racelijst.push(race));
    //   //console.log(this.racelijst);
    // };
  
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