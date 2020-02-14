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
    edit = false;
  
    constructor(rootStore) {
      this.rootStore = rootStore;
      this.subscriptionsApi = new SubscriptionsApi(`subscriptions`);
        this.getAll();
        console.log(this.subscriptionlijst);
    }
  
    getAll = () => {
      this.subscriptionsApi.getAll().then(d => d.forEach(this._addSubscription));
    };
  
    _addSubscription = values => {
      //console.log(values);
      const subscription = new Subscription();
      subscription.updateFromServer(values);
      runInAction(() => this.subscriptionlijst.push(subscription));
    };
      
  
    findById = id => {
      const subscription = this.subscriptionlijst.find(check => check.id === id);
      if (!subscription) {
        this.subscriptionsApi.getById(id).then(this._addSubscription);
      }
  
      return subscription;
    };


    
    updateSubscription = subscription => {
      this.subscriptionsApi.update(subscription).then(subscriptionValues => subscription.updateFromServer(subscriptionValues))
    }


  }



  
  
  decorate(SubscriptionStore, {
    subscriptionlijst: observable,
    getAll: action,
    _addSubscription: action
  });

  
  export default SubscriptionStore;