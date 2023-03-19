const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    title : {type :String},
    price: {type : Number},
    description : {type :String},
    category:{type: String},
    image : {type : String},
    sold : {type : Boolean},
    dateOfSale :{type : Date}
});


const data = mongoose.model("data", DataSchema);
module.exports = data;