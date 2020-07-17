// const db=require('../db');
const User = require('../models/users_model');
module.exports.add=async(req,res,next)=>{
    let errors=[];
    if(req.body.name.length>10){
        errors.push('Ten qua dai, chi duoi 31 ki tu, moi nhap lai');
    }
    if(req.body.name.length===null || req.body.name.length<=2){
        errors.push('Phai co it nhat 3 ki tu');
    }
    if(errors.length){
        res.render('users/index',{
            users: await User.find(),
            errors: errors
        });
        return;
    }
    next();
}
module.exports.edit=async(req,res,next)=>{
    let errors=[];
    if(req.body.name.length>10){
        errors.push('Ten qua dai, chi duoi 31 ki tu, moi nhap lai');
    }
    if(req.body.name.length===null || req.body.name.length<=2){
        errors.push('Phai co it nhat 3 ki tu');
    }
    if(errors.length){
        res.render('users/profile',{
            users: await User.find(),
            errors: errors
        });
        return;
    }
    next();
}