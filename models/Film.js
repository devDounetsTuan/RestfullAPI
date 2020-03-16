const mongoose = require("mongoose");

const filmModel = mongoose.Schema(
  {
    u_film_name: {
      type: String
    },
    u_url_image: {
      type: String
    },
    u_url_video: {
      type: String
    },
    u_view: {
      type: String
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Film", filmModel);
