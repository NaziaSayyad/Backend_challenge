const express = require(`express`);
const BarChart = require("../controllers/BarChart.controller");
const Router = express.Router();

Router.route("/barchart").get(BarChart);


module.exports = Router;

