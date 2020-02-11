import uuid from "uuid";
import { decorate, action, observable } from "mobx";

class Subscription {
  constructor(
    role,
    //raceId,
    id = uuid.v4()
  ) {
    this.id = id;
    //this.raceId = raceId;
    this.role = role;
  }

  setId = value => (this.id = value);
  //setRaceId = value => (this.raceId = value);
    
    
  setRole = value => (this.role = value);

  updateFromServer = values => {
    if (values._id) {
      this.setId(values._id);
    }
    //this.raceId(values.raceId);
    this.setRole(values.role);
  };

  //   get values() {
  //     return {product: this.product, prijs: this.prijs, persoon: this.persoon };
  //   }

  //   get totaal() {
  //     return this.prijs;
  //   }
}

decorate(Subscription, {
  id: observable,
  //raceId: observable,
  role: observable,

  setId: action,
  //setRaceId: action,
  setRole:action,
  //   values: computed,
  //   totaal: computed,
});

export default Subscription;
