const data = require("../Models/data.model");

const PieChart = async(req,res) =>{
    const{ month} = req.body;
  
    try{
        let obj = {};
  
        const final_data = await data.find( );
        final_data.map((el) => {
            let d= new Date(el.dateOfSale)
             if(month == d.getMonth()){
                let temp = el.category;
                if(obj[temp] == undefined) {
                        obj[temp] =1
                    }
                    else{
                        obj[temp]++;
                    }
                  
             }
          
        })
        res.send( {msg : "Total Items of the unique Category" , obj } );
        
      }catch(err){
          res.send(err);
      }
  }

module.exports = PieChart;
