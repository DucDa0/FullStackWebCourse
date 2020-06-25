const db=require('../db');
module.exports.add=(req,res,next)=>{
    let errors=[];
    if(req.body.name.length>10){
        errors.push('Ten qua dai, chi duoi 31 ki tu, moi nhap lai');
    }
    if(req.body.name.length===null || req.body.name.length<=2){
        errors.push('Phai co it nhat 3 ki tu');
    }
    if(errors.length){
        res.render('users/index',{
            users: db.get('users').value(),
            errors: errors
        });
        return;
    }
    next();
}
module.exports.edit=(req,res,next)=>{
    let errors=[];
    if(req.body.name.length>10){
        errors.push('Ten qua dai, chi duoi 31 ki tu, moi nhap lai');
    }
    if(req.body.name.length===null || req.body.name.length<=2){
        errors.push('Phai co it nhat 3 ki tu');
    }
    if(errors.length){
        res.render('users/profile',{
            users: db.get('users').value(),
            errors: errors
        });
        return;
    }
    next();
}