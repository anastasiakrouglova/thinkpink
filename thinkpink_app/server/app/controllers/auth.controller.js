const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");

const tokenCookie = {
  maxAge: 1800000,
  sameSite: true
};
const signatureCookie = {
  maxAge: 86400000,
  httpOnly: true,
  sameSite: true
};

exports.register = (req, res) => {
  const { email, password, name } = req.body;
  const user = new User({ email, password, name });
  user.save(err => {
    if (err) {
      res.status(500).send("Error registering new user. Please try again.");
    } else {
      res.status(200).send("Successfully registered!");
    }
  });
};
