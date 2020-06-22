const db=require('../db');
const shortid = require('shortid');
// show transactions
let data;
module.exports.home=(req,res)=>{
    let user= db.get('users').find({id: req.cookies.userId}).value();
    if(user.isAdmin){
        data=db.get('transactions').value();
    }
    else{
        data=db.get('transactions').value().filter(item=>item.userId===user.id);
    }
    res.render('transactions/index',{
        transactions: data,
        users: db.get('users').value(),
        books: db.get('books').value()
    });
};
//  add transactions
module.exports.create=(req,res)=>{
    req.body.id=shortid.generate();
    req.body.isComplete=false;
    db.get('transactions').push(req.body).write();
    res.redirect('/transactions');
};
//  complete trans
let id;
module.exports.isComplete=(req,res)=>{
    id=req.params.id;
    let errors=[];   
    if((db.get('transactions').find({id: id}).value())===undefined){
        errors.push('Error.......!');
    }
    if(errors.length){
        res.render('transactions/index',{
            errors: errors,
            transactions: data,
            users: db.get('users').value(),
            books: db.get('books').value()
        });
        return;
    }
    db.get('transactions').find({id: id}).assign({isComplete: true}).write();
    res.redirect('/transactions');
}