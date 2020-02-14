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
    supporter,
    country,
    typeRace,
    photo,
    //raceId,
    id = uuid.v4()
  ) {
    this.id = id;
    //this.raceId = raceId;
    this.role = role;
    this.teamName = teamName;
    this.description = description;
    this.teamCaptain = teamCaptain;
    this.teamSong = teamSong;
    this.dessert = dessert;
    this.supporter = supporter;
    this.country = country;
    this.typeRace = typeRace;
    this.photo = photo;
  }

  setId = value => (this.id = value);
  //setRaceId = value => (this.raceId = value);
  setRole = value => (this.role = value);
  setTeamName = value => (this.teamName = value);
  setDescription = value => (this.description = value);
  setTeamCaptain = value => (this.teamCaptain = value);
  setTeamSong = value => (this.teamSong = value);
  setDessert = value => (this.dessert = value);
  setSupporter = value => (this.supporter = value);
  setCountry = value => (this.country = value);
  setTypeRace = value => (this.typeRace = value);
  setPhoto = value => (this.photo = value);

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
    this.setSupporter(values.supporter)
    this.setCountry(values.country)
    this.setTypeRace(values.typeRace)
    this.setPhoto(values.photo)
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
  supporter: observable,
  country: observable,
  typeRace: observable,
  photo: observable,

  setId: action,
  //setRaceId: action,
  setRole: action,
  setTeamName: action,
  setDescription: action,
  setTeamCaptain: action,
  setTeamSong: action,
  setDessert: action,
  setSupporter: action,
  setCountry: action,
  setTypeRace: action,
  setPhoto: action
});

export default Subscription;
