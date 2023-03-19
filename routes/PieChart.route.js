const express = require(`express`);
const PieChart = require("../controllers/piechart.controller");
const Router = express.Router();

Router.route("/piechart").get(PieChart);


module.exports = Router;

