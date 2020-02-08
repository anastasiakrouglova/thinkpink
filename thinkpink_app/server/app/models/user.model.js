const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  birthday: {type: Object, required: true},
  phoneNumber: { type: Number },
  tShirtSize: { type: String, required: true }
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.pre("save", function(next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, 12, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

module.exports = mongoose.model("User", UserSchema);
