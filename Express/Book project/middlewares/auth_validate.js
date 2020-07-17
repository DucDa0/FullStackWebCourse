// const db=require('../db');
const User = require('../models/users_model');
module.exports.authRequire=(req,res,next)=>{
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    // let user= db.get('users').find({id: req.signedCookies.userId}).value();
    let user=User.findById({_id:req.signedCookies.userId}).exec();
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    // res.locals.user=user;
    next();
}