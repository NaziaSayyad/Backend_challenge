const data = require("../Models/data.model");

const Statistic = async (req,res) => {
    const {month} = req.body;
      try{
      
        const TotalSale = await data.aggregate([   
            {$project: {'month': { $month: { date: { $toDate: "$dateOfSale" } } },  price: 1}},  
            {$match: {'month': month}},   
            {$group: {_id: null,total: { $sum: "$price" }}} 
        ])
         const TotalSoldItems = await data.aggregate([   
            {$project: {'month': { $month: { date: { $toDate: "$dateOfSale" } } },sold: 1}},  
            {$match: {'month': month, sold: true}},
            { $count: "total"} 
            ])
         const NotSold = await data.aggregate([ 
            {$project: { 'month': { $month: { date: { $toDate: "$dateOfSale" } } },sold: 1}},  
            {$match: { 'month': month, sold: false}}, 
              {$count: "total"} 
             ])
        
      
      res.send({ TotalSale, TotalSoldItems, NotSold });
      console.log(sum);
  
      }catch(err){
        res.send(err);
    }
   
  }
  module.exports = Statistic;
