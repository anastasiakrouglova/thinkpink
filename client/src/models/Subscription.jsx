import uuid from "uuid";
import { decorate, action, observable } from "mobx";

class Subscription {
  constructor(
    role,
    teamName,
    description,
    teamCaptain,
    teamSong,
    dessert,
    //raceId,
    id = uuid.v4()
  ) {
    this.id = id;
    //this.raceId = raceId;
    this.role = role;
    this.teamName = teamName;

    this.description = description;
    this.teamCaptain = teamCaptain
    this.teamSong = teamSong;
    this.dessert = dessert;
  }

  setId = value => (this.id = value);
  //setRaceId = value => (this.raceId = value);
  setRole = value => (this.role = value);
  setTeamName = value => (this.teamName = value);

  setDescription = value => (this.description = value);
  setTeamCaptain = value => (this.teamCaptain = value);
  setTeamSong = value => (this.teamSong = value);
  setDessert = value => (this.dessert = value);

  updateFromServer = values => {
    if (values._id) {
      this.setId(values._id);
    }
    //this.raceId(values.raceId);
    this.setRole(values.role);
    this.setTeamName(values.teamName);
    
    this.setDescription(values.description);
    this.setTeamCaptain(values.teamCaptain);
    this.setTeamSong(values.teamSong);
    this.setDessert(values.dessert);
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
  teamName: observable,
  description: observable,
  teamCaptain: observable,
  teamSong: observable,
  dessert: observable,

  setId: action,
  //setRaceId: action,
  setRole: action,
  setTeamName: action,
  setDescription: action,
  setTeamCaptain: action,
  setTeamSong: action,
  setDessert: action
});

export default Subscription;
