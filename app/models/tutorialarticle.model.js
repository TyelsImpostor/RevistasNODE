const mongoose = require("mongoose");

const Tutorialarticle = mongoose.model(
  "Tutorialarticle",
  new mongoose.Schema({
    id_tutorial: String,
    id_article: String,
  })
);

module.exports = Tutorialarticle;