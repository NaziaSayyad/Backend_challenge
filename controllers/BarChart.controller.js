const data = require("../Models/data.model");

const BarChart = async(req,res) =>{
  const obj = {"0-100" : 0, "101-200" : 0, "201-300" : 0, "301-400":0, "401-500" : 0, "501-600" : 0, "601-700" : 0, "701-800" : 0, "801-900" : 0, "901-above" : 0}
  const {month} = req.body;
      // console.log(obj);
try{
  // const data = await Data.aggregate([ {$match : { id : 1} }, { $group : { _id: null, total : { $sum : "$price" } } }  ])
  const final_data = await data.find( );
  final_data.map((el) => {
      // console.log(el);
    let d= new Date(el.dateOfSale)
    if(month == d.getMonth()){
      let price = Math.floor(el.price);
      // console.log(price);
           if(price>=0 &&    price<=100 ){obj["0-100"]++;}
      else if(price>=101  && price<=200 ){obj["101-200"]++;}
      else if(price>=201  && price<=300 ){obj["201-300"]++;}
      else if(price>=301  && price<=400 ){obj["301-400"]++;}
      else if(price>=401  && price<=500 ){obj["401-500"]++;}
      else if(price>=501  && price<=600 ){obj["501-600"]++;}
      else if(price>=601  && price<=700 ){obj["601-700"]++;}
      else if(price>=701  && price<=800 ){obj["701-800"]++;}
      else if(price>=801  && price<=900 ){obj["801-900"]++;}
      else {obj["901-above"]++;}
              
    }
    
  })
  res.send(obj)
}catch(err){
    res.send(err);
}
}
module.exports =BarChart;
