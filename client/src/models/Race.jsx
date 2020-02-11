import uuid from "uuid";
import { decorate, action, observable } from "mobx";

class Race {
  constructor(
    city,
    country,
    month,
    date,
    year,
    startLocation,
    startTime,
    description,
    sponsors,
    image,
    //raceId,
    id = uuid.v4()
  ) {
    this.id = id;
    //this.raceId = raceId;
    this.city = city;
    this.country = country;
    this.month = month;
    this.date = date;
    this.year = year;
    this.startLocation = startLocation;
    this.startTime = startTime;
    this.description = description;
    this.sponsors = sponsors;
    this.image = image;
  }

  setId = value => (this.id = value);
  //setRaceId = value => (this.raceId = value);
  setCity = value => (this.city = value);
  setCountry = value => (this.country = value);
  setMonth = value => (this.month = value);
  setDate = value => (this.date = value);
  setYear = value => (this.year = value);
  setStartLocation = value => (this.startLocation = value);
  setStartTime = value => (this.startTime = value);
  setDescription = value => (this.description = value);
  setSponsors = value => (this.sponsors = value);
  setImage = value => (this.image = value);

  updateFromServer = values => {
    if (values._id) {
      this.setId(values._id);
    }
    //this.raceId(values.raceId);
    this.setCity(values.city);
    this.setCountry (values.country);
    this.setMonth (values.month);
    this.setDate (values.date);
    this.setYear (values.year);
    this.setStartLocation (values.startLocation);
    this.setStartTime (values.startTime);
    this.setDescription(values.description);
    this.setSponsors(values.sponsors);
    this.setImage(values.image)
  };

  //   get values() {
  //     return {product: this.product, prijs: this.prijs, persoon: this.persoon };
  //   }

  //   get totaal() {
  //     return this.prijs;
  //   }
}

decorate(Race, {
  id: observable,
  //raceId: observable,
  city: observable,
  country: observable,
  month: observable,
  date: observable,
  year: observable,
  startLocation: observable,
  startTime: observable,
  description: observable,
  sponsors: observable,
  image: observable,

  setId: action,
  //setRaceId: action,
  setCity:action,
  setCountry :action,
  setMonth :action,
  setDate :action,
  setYear :action,
  setStartLocation: action,
  setStartTime :action,
  setDescription :action,
  setSponsors: action,
  setImage: action
  //   values: computed,
  //   totaal: computed,
});

export default Race;
