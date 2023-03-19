const data = require("../Models/data.model");

const Statistic = async (req,res) => {
    const {month} = req.body;
      try{
      let sum = sold = notsold = 0;
      const final_data = await data.find( );
      final_data.map((el) => {
        // console.log(el.dateOfSale);
        let d= new Date(el.dateOfSale)
        // console.log(d.getMonth());
        if(month == d.getMonth()){
          sum += el.price;
          if(el.sold){
            sold++;
          }
          else{
            notsold++;
          }
        }
        
      })
      
      res.send({ sum , sold, notsold });
      console.log(sum);
  
      }catch(err){
        res.send(err);
    }
   
  }
  module.exports = Statistic;
  