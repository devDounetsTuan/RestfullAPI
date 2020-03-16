const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  methodOverride = require("method-override"),
  cors = require("cors"),
  app = express();

const env = (process.env.NODE_ENV = process.env.NODE_ENV || "development"),
  envConfig = require("./db/env")[env];
  require("./db");


// hack to use async-await in controllers
require("express-async-errors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

require("./routes")(app);

app.listen(envConfig.port, function() {
  console.log("Server listening on port " + envConfig.port);
});
