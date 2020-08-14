const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.tutorials = require("./tutorial.model");
db.articles = require("./article.model");
db.areas = require("./area.model");
db.tutorialarticles = require("./tutorialarticle.model");

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;