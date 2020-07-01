// const db=require('../db');
const shortid = require('shortid');
const Session=require('../models/sessions_model');
const Book = require('../models/books_model');
const User = require('../models/users_model');
const Tran = require('../models/transactions_model');
module.exports.cartHome=async (req,res)=>{
    // var yourCart=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').value();
    var yourCart= await Session.findById({_id:req.signedCookies.sessionId}).exec();
    if(!yourCart.get('cart')){
        res.render('cart/index',{
            Cart: false
        });
        return;
    }
    // var books=db.get('books').value();
    var books=await Book.find();
    var data=[];
    var tmp={};
    for(var book of books){
        for(item of yourCart.get('cart')){
            if(book.id === item.bookId){
                tmp={
                    book: book,
                    amount: item.amount
                }
                data.push(tmp);
            }
        }
        // if(book.id in yourCart.get('cart')){
            
        //     tmp={
        //         book: book,
        //         amount: yourCart.get('cart')[book.id]
        //     }
        //     data.push(tmp);
        // }
    }
    res.render('cart/index',{
        Cart: data
    });
}
module.exports.addToCart=async (req,res,next)=>{
    var productId=req.params.productId;
    var sessionId=req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    // let count=db.get('sessions').find({id : sessionId}).get('cart.'+ productId, 0).value();
    var yourCart=await Session.findById({_id:sessionId}).exec();
    if(!yourCart.get('cart')){
        yourCart._doc.cart=[];
        yourCart.get('cart').push({bookId:productId,amount:1});
        yourCart.markModified('cart');
        await yourCart.save();
        return res.redirect('/products');
    }
    else{
        let cartItem=yourCart.get('cart').find(item=>item.bookId===productId);
        if(!cartItem){
            yourCart.get('cart').push({bookId: productId, amount: 1});
            yourCart.markModified('cart');
            await yourCart.save();
            return res.redirect('/products');
        }
        cartItem.amount+=1;
        yourCart.markModified('cart');
        await yourCart.save();
        return res.redirect('/products');
    }
    // db.get('sessions').find({id : sessionId}).set('cart.'+ productId, count + 1).write();
}
module.exports.cartComplete=async(req,res)=>{
    // var user= db.get('users').find({id: req.signedCookies.userId}).value();
    // var user= await User.findOne({_id:req.signedCookies.userId}).exec();
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    else{
        var user= await User.findById({_id:req.signedCookies.userId}).exec();
    }
    // var data=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').value();
    var data=await Session.findById({_id:req.signedCookies.sessionId}).exec();
    for(var book of data.get('cart')){
        // db.get('transactions').push({
        //     id: shortid.generate(),
        //     isComplete: false,
        //     userId: user.id,
        //     bookId: bookId
        // }).write();
        await Tran.insertMany({isComplete: false, userId: user.id, bookId: book.bookId});
    }
    // db.get('sessions').find({id : req.signedCookies.sessionId}).unset('cart').write();
    await data.replaceOne({cart:{}}).exec();
    res.redirect('/transactions');
}