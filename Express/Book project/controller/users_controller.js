const db=require('../db');
const shortid = require('shortid');

// show users list
module.exports.home=(req,res)=>{
    res.render('users/index',{
        users: db.get('users').value()
    });
};
// add users
module.exports.add=(req,res)=>{
    let errors=[];
    if(req.body.name.length>30){
        errors.push('Ten qua dai, chi duoi 31 ki tu, moi nhap lai');
    }
    if(errors.length){
        res.render('users/index',{
            users: db.get('users').value(),
            errors: errors
        });
        return;
    }
    req.body.id=shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/users');
};
// edit user
let id;
module.exports.editHome=(req,res)=>{
    id=req.params.id;
    let user=db.get('users').find({id:id}).value();
    res.render('users/edit',{
        users: user
    });
};
module.exports.editSave=(req,res)=>{
    let errors=[];
    if(req.body.name.length>10){
        errors.push('Ten qua dai, chi duoi 31 ki tu, moi nhap lai');
    }
    if(errors.length){
        res.render('users/edit',{
            users: db.get('users').find({id:id}).value(),
            errors: errors
        });
        return;
    }
    db.get('users').find({id:id}).assign({name: req.body.name}).write();
    res.redirect('/users');
};
// delete user
module.exports.delete=(req,res)=>{
    id=req.params.id;
    db.get('users').remove({id:id}).write();
    res.redirect('/users');
};