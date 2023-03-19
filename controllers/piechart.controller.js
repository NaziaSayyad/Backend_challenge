const data = require("../Models/data.model");

const PieChart = async(req,res) =>{
    const{ month} = req.body;
    try{
      const final_data = await data.aggregate([  
         { $project: {"month":{ $month:{ date: { $toDate: "$dateOfSale" } } },category: 1}},  
         { $match: {  "month": month }},  
         {$group: {   _id: "$category",TotalItems: { $sum: 1 }  }   } ])
         
         res.send( {msg : "Total Items of the unique Category" ,final_data } );  
      }
      
      catch(err){
          res.send(err);
      }
  }

module.exports = PieChart;
