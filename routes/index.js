const express = require("express"),
  path = require("path"),
  rootPath = path.normalize(__dirname + "/../"),
  router = express.Router(),
  { FilmsController } = require("../controllers"),
  { Film, Category } = require("../models");

module.exports = function(app) {
  router.get("/films", FilmsController.showFromTo);
  app.use("/api", router);
};
