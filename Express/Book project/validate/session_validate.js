const shortid = require('shortid');
// const db=require('../db');
const Session=require('../models/sessions_model');
const User = require('../models/users_model');
module.exports=async(req,res,next)=>{
    if(!req.signedCookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId', sessionId,{
            signed: true
        });
        // db.get('sessions').push({
        //     id: sessionId
        // }).write();
        await Session.insertMany({_id:sessionId});
    }
    // let countCart=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').size();
    var countCart;
    if(req.signedCookies.sessionId){
        var Cart=await Session.findById({_id:req.signedCookies.sessionId}).exec();
        if(Cart.get('cart')){
            countCart = Cart.get('cart').length;
        }
        else{
            countCart=0;
        }
    }
    else{
        countCart=0;
    }
    res.locals.cart=countCart;
    // let user= db.get('users').find({id: req.signedCookies.userId}).value();

    if(req.signedCookies.userId){
        let user= await User.findById({_id:req.signedCookies.userId}).exec();
        res.locals.user=user;
    }
    else{
        res.locals.user="";
    }
    
    next();
}