const Tran = require('../../models/transactions_model');
module.exports.home=async(req,res)=>{
    var trans=await Tran.find();
    res.json(trans);
}