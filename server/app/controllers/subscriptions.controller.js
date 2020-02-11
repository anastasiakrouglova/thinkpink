const Subscription = require("../models/subscription.model.js");

exports.create = (req, res) => {
    if (!req.body.role) {
    console.log(Subscription);
    return res.status(500).send({ err: "role can not be empty." });
}

const subscription = new Subscription({
  role: req.body.role,
  teamName: req.body.teamName,
  description: req.body.description,
  teamCaptain: req.body.teamCaptain,
  teamSong: req.body.teamSong,
  dessert: req.body.dessert
  });

  subscription
    .save()
    .then(subscription => res.send(subscription))
    .catch(err => {
      res.status(500).send({
        err: err.subscription || "Error creating a subscription (from create function)"
      });
    });
};

exports.findAll = async (req, res) => {
  try {
    const subscription = await Subscription.find();
    res.send(subscription);
  } catch (err) {
    res.status(500).send({ err: err.subscription || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const subscription = await Subscription.findOne({
      _id: req.params.id
    });

    if (subscription) {
      res.send(subscription);
    } else {
      res.status(404).send("Subscription not found (findOne function)");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("No valid subscriptionId");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.role) {
    return res.status(400).send("role can not be empty.");
  }

  try {
    const subscription = await Subscription.findOneAndUpdate(
      {
        _id: req.params.subscriptionId,
        role: req.params.role, 
        teamName: req.params.teamName, 
        description: req.body.description,
        teamCaptain: req.body.teamCaptain,
        teamSong: req.body.teamSong,
        dessert: req.body.dessert
      },
      {
        new: true
      }
    );

    if (!subscription) {
      return res.status(404).send("No subscription found (update function)");
    }

    res.send(subscription);
  } catch {
    if (err.kind === "ObjectId") {
      return res.status(417).send("No valid subscriptionId");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const subscription = await Subscription.findOneAndRemove({
      _id: req.params.id
    });
    if (!subscription) {
      return res.status(404).send("No subscription found (delete function)");
    }
    res.send(subscription);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("No valid subscriptionId");
    }
    return res.status(500).send(err);
  }
};
