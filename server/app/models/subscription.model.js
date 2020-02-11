const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema({
  role: String,
  teamName: String,
  description: String,
  teamCaptain: String,
  teamSong: String,
  dessert: String
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
