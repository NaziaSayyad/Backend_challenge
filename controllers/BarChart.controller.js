const data = require("../Models/data.model");

const BarChart = async(req,res) =>{
  const {month} = req.body;
 try{
   const final_data = await data.aggregate([  
     { $project: {'month':{ $month:{ date: { $toDate: "$dateOfSale" } } },  price: 1}},  
     {$match: {'month': month}},  
      {$bucket: {groupBy: "$price",     
      boundaries: [0, 101, 201, 301, 401, 501, 601, 701, 801, 901, Infinity],default: "Above 901",    
       output: {"count": { $sum: 1 }}}}
       ])
       
    res.status(200).json(final_data)
  }catch(err){
    res.send(err);
}
}
module.exports =BarChart;
