const Race = require("../models/race.model");

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(500).send({ err: "name can not be empty." });
  }

  const race = new Race({
    name: req.body.name,
    desc: req.body.desc,
    raceId: req.body.raceId
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
    const race = await Race.findAll();
    res.send(race);
  } catch (err) {
    res.status(500).send({
      err: err.race || "Error finding all races (from findAll function)"
    });
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
  if (!req.body.name) {
    return res.status(400).send("Name can not be empty.");
  }

  try {
    const race = await Race.findOneAndUpdate(
      {
        _id: req.params.raceId,
        name: req.body.name,
        desc: req.body.desc
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