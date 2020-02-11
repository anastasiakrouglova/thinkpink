const mongoose = require("mongoose");

const SubscriptionSchema = mongoose.Schema({
  role: String,
  teamName: String,
  // surname: String,
  // month: String,
  // date: Number,
  // year: Number,
  // startLocation: String,
  // startTime: String,
  // description: String,
  // sponsors: Object,
  // image: String
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
