const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const RaceSchema = mongoose.Schema({
  city: String,
  country: String,
  month: String,
  date: Number,
  year: Number,
  startLocation: String,
  startTime: String,
  description: String,
  sponsors: Object,
});

module.exports = mongoose.model("Race", RaceSchema);
