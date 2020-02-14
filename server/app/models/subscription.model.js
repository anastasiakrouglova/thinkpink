const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema({
  role: String,
  teamName: String,
  description: String,
  teamCaptain: String,
  teamSong: String,
  dessert: String,
  supporter: String,
  country: String,
  typeRace: String,
  photo: String
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
