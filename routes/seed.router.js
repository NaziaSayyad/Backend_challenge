const express = require(`express`);
const AllData = require("../controllers/seed_data.controller");
const Router = express.Router();

Router.route("/").get(AllData);

module.exports = Router;

