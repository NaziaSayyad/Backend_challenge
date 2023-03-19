const Data = require("../Models/data.model");

const AllData = async (req,res) =>{
  try{
    const data = await Data.find();
    res.send(data);

  }catch(er){
    res.send(er)
  }
}



module.exports = AllData
/* 
  // const data = await Data.aggregate([ {$match : { id : 1} }, { $group : { _id: null, total : { $sum : "$price" } } }  ])
  
db.sales.aggregate([
  {
    $group: {
      _id: {
        month: { $month: "$date" },
        day: { $dayOfMonth: "$date" },
        year: { $year: "$date" }
      },
      totalPrice: { $sum: { $multiply: ["$price", "$quantity"] } },
      count: { $sum: 1 }
    }
  }
])
db.data.find({dateOfSale : {$not : {$type : 9}}}).forEach(function (doc) {
    doc.created_at = new Date(doc.created_at) 
  })
*/ 