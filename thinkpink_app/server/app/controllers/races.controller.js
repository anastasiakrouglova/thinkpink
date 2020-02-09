const Race = require("../models/race.model.js");

exports.create = (req, res) => {
  if (!req.body.city) {
    return res.status(500).send({ err: "city can not be empty." });
  }

  const race = new Race({
    city: req.body.city,
    country: req.body.country,
    month: req.body.month,
    date: req.body.date,
    year: req.body.year,
    startLocation: req.body.startLocation,
    startTime: req.body.startTime,
    description: req.body.description,
    sponsors: req.body.sponsors,
    raceId: req.body.raceId,
    image: req.body.image
  });

  race
    .save()
    .then(race => res.send(race))
    .catch(err => {
      res.status(500).send({
        err: err.race || "Error creating a race (from create function)"
      });
    });
};

exports.findAll = async (req, res) => {
  try {
    const race = await Race.find();
    res.send(race);
  } catch (err) {
    res.status(500).send({ err: err.race || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const race = await Race.findOne({
      _id: req.params.raceId
    });

    if (race) {
      res.send(race);
    } else {
      res.status(404).send("Race not found (findOne function)");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("No valid raceId");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.city) {
    return res.status(400).send("city can not be empty.");
  }

  try {
    const race = await Race.findOneAndUpdate(
      {
        _id: req.params.raceId,
        city: req.body.city,
        country: req.body.country,
        month: req.body.month,
        date: req.body.date,
        year: req.body.year,
        startLocation: req.body.startLocation,
        startTime: req.body.startTime,
        description: req.body.description,
        sponsors: req.body.sponsors,
        image: req.body.image
      },
      {
        new: true
      }
    );

    if (!race) {
      return res.status(404).send("No race found (update function)");
    }

    res.send(race);
  } catch {
    if (err.kind === "ObjectId") {
      return res.status(417).send("No valid raceId");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const race = await Race.findOneAndRemove({
      _id: req.params.raceId
    });
    if (!race) {
      return res.status(404).send("No race found (delete function)");
    }
    res.send(race);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("No valid raceId");
    }
    return res.status(500).send(err);
  }
};
