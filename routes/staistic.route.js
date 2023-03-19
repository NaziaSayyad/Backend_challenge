const express = require(`express`);
const Statistic = require("../controllers/Statistic.controller");
const Router = express.Router();

Router.route("/statistic").get(Statistic);



module.exports = Router;

