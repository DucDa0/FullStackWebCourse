// const db=require('../db');
// const shortid = require('shortid');
const Tran = require('../models/transactions_model');
const Book = require('../models/books_model');
const User = require('../models/users_model');
// show transactions
let data;
module.exports.home=async(req,res)=>{
    // let user= db.get('users').find({id: req.signedCookies.userId}).value();
    let user=await User.findById({_id : req.signedCookies.userId}).exec();
    if(user.get('isAdmin')){
        // data=db.get('transactions').value();
        data= await Tran.find();
    }
    else{
        // data=db.get('transactions').value().filter(item=>item.userId===user.id);
        data=await Tran.find({userId: user.get('id')}).exec();
    }
    res.render('transactions/index',{
        transactions: data,
        users: await User.find(),
        books: await Book.find()
    });
};
//  add transactions
module.exports.create=async(req,res)=>{
    // req.body.id=shortid.generate();
    req.body.isComplete=false;
    // db.get('transactions').push(req.body).write();
    await Tran.insertMany(req.body);
    res.redirect('/transactions');
};
//  complete trans
let id;
module.exports.isComplete=async (req,res)=>{
    id=req.params.id;
    let errors=[];
    let temp=await Tran.findById({_id:id}).exec();
    if(!temp){
        errors.push('Error.......!');
    }
    if(errors.length){
        res.render('transactions/index',{
            errors: errors,
            transactions: data,
            users: await User.find(),
            books: await Book.find()
        });
        return;
    }
    // db.get('transactions').find({id: id}).assign({isComplete: true}).write();
    await Tran.findOneAndUpdate({_id:id},{isComplete: true}).exec();
    res.redirect('/transactions');
}