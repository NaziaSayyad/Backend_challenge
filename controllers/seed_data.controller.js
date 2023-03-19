const Data = require("../Models/data.model");

const AllData = async (req,res) =>{
  try{
    const data = await Data.find();
    res.status(200).json(data)

  }catch(er){
    res.send(er)
  }
}



module.exports = AllData

  