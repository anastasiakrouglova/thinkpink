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
  const { email, password, name, surname } = req.body;
  const user = new User({ email, password, name, surname });
  user.save(err => {
    if (err) {
      res.status(500).send("Error registering new user. Please try again.");
    } else {
      res.status(200).send("Successfully registered!");
    }
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ error: "email and password are required." });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).send({ error: "incorrect email or password." });
    } else {
      const isPasswordCorrect = await user.validPassword(password);
      if (isPasswordCorrect) {
        const { _id, name, email } = user;
        const token = jwt.sign({ _id, name, email }, process.env.SECRET, {
          expiresIn: "24h"
        });
        const parts = token.split(".");
        const signature = parts.splice(2);
        return res
          .cookie("token", parts.join("."), tokenCookie)
          .cookie("signature", signature, signatureCookie)
          .status(200)
          .send({ message: "Successfully logged in!" });
      } else {
        return res.status(401).send({
          success: false,
          message: "Incorrect email or password."
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Internal error, please try again.", error });
  }
};

exports.logout = (req, res) => {
  res
    .clearCookie("token", tokenCookie)
    .clearCookie("signature", signatureCookie)
    .sendStatus(200);
};
