const mongoose = require("mongoose");

const Area = mongoose.model(
  "Area",
  new mongoose.Schema({
    name: String,
  })
);

module.exports = Area;