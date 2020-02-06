const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const RaceSchema = mongoose.Schema({
  name: String,
  desc: String
});

module.exports = mongoose.model("Race", RaceSchema);
