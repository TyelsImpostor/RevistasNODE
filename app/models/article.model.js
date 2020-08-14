const mongoose = require("mongoose");

const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    id_user: String,
    title: String,
    state: String,
    document: String,
    commentary: String,
    description: String,
    authors: String,
    published: String,
  })
);

module.exports = Article;