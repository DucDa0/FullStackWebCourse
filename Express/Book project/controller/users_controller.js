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
    req.body.id=shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('back');
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
    db.get('users').find({id:id}).assign({name: req.body.name}).write();
    res.redirect('/users');
};
// delete user
module.exports.delete=(req,res)=>{
    id=req.params.id;
    db.get('users').remove({id:id}).write();
    res.redirect('back');
};