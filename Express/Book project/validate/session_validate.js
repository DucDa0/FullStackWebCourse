const shortid = require('shortid');
const db=require('../db');
module.exports=(req,res,next)=>{
    if(!req.signedCookies.sessionId){
        var sessionId = shortid.generate();
        res.cookie('sessionId', sessionId,{
            signed: true
        });
        db.get('sessions').push({
            id: sessionId
        }).write();
    }
    let countCart=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').size();
    let user= db.get('users').find({id: req.signedCookies.userId}).value();
    res.locals.user=user;
    res.locals.cart=countCart;
    next();
}