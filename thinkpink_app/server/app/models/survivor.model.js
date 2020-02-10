const mongoose = require("mongoose");

const SurvivorSchema = mongoose.Schema({
  name: String,
  surname: String,
  month: String,
  date: Number,
  year: Number,
  startLocation: String,
  startTime: String,
  description: String,
  sponsors: Object,
  image: String
});

module.exports = mongoose.model("Race", RaceSchema);
