const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true, //deprecation warning to use new engine
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("Database connected!"))
  .catch(e => {
    console.log("Error, exiting", e);
    process.exit();
  });

const app = express();

// BUILD PAS GEBRUIKEN WNR DEPLOYEN ON HEROKU
app.use(express.static(path.resolve(__dirname, "../client/build/")));
// app.use(express.static(path.resolve(__dirname, "../client/src")));

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routes/auth.routes.js")(app);
require("./app/routes/races.routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/src", "index.js"));
// });

app.use(cors({credentials: true, origin: '*' }));

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port: ${process.env.PORT}`);
});
