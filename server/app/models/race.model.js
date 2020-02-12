const mongoose = require("mongoose");

const RaceSchema = mongoose.Schema({
  raceId: String,
  city: String,
  country: String,
  month: String,
  date: Number,
  year: Number,
  startLocation: String,
  startTime: String,
  description: String,
  sponsors: Object,
  image: String,
  map: String
});

module.exports = mongoose.model("Race", RaceSchema);
