const express = require(`express`)
const dotenv= require("dotenv");
const cors= require('cors');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const SeeddataRoute = require("./routes/seed.router");
const PieChartRoute = require("./routes/PieChart.route");
const BarChartRoute =require("./routes/BarChart.route");
const StatisticRoute = require("./routes/staistic.route")
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended :true}))
app.use(cors());

app.get(`/` ,SeeddataRoute);
app.use('/',PieChartRoute);
app.use('/',BarChartRoute);
app.use('/', StatisticRoute);

app.listen(PORT , () => {
  console.log(`Server started on port ${PORT}`)
})