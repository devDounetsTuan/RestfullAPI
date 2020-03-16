const { Film } = require("../models");

const FilmsController = {
  async showAll(req, res) {
    const films = await Film.find().populate("films");
    res.send(films);
  },
  async showFromTo(req, res) {
    await Film.find({})
      .skip(2)
      .limit(2)
      .exec(function(err, docs) {
        res.send(docs);
      });
  }
};

module.exports = FilmsController;
