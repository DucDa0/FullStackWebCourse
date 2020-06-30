// const db=require('../db');
const shortid = require('shortid');
const Session=require('../models/sessions_model');
const Book = require('../models/books_model');
module.exports.cartHome=async (req,res)=>{
    // var yourCart=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').value();
    var yourCart= await Session.findById({_id:req.signedCookies.sessionId});
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
        if(book.id in yourCart.get('cart')){
            
            tmp={
                book: book,
                amount: yourCart.get('cart')[book.id]
            }
            data.push(tmp);
        }
    }
    res.render('cart/index',{
        Cart: data
    });
}
module.exports.addToCart=async (req,res,next)=>{
    let productId=req.params.productId;
    let sessionId=req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    // let count=db.get('sessions').find({id : sessionId}).get('cart.'+ productId, 0).value();
    let yourCart=await Session.findById({_id:sessionId}).exec();
    
    if(!yourCart.get('cart')){
        yourCart.get('cart')[productId] = 1;
    }
    else if(productId in yourCart.get('cart')){
        yourCart.get('cart')[productId]=++yourCart.get('cart')[productId];
    }
    else{
        yourCart.get('cart')[productId] = 1;
        let newCart=yourCart.get('cart');
        await Session.findByIdAndUpdate({_id:sessionId},{cart:newCart}).exec();
    }
    // db.get('sessions').find({id : sessionId}).set('cart.'+ productId, count + 1).write();
    res.redirect('/products');
}
module.exports.cartComplete=(req,res)=>{
    var user= db.get('users').find({id: req.signedCookies.userId}).value();
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    var data=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').value();
    // for(var bookId of Object.keys(data)){
    //     db.get('transactions').push({
    //         id: shortid.generate(),
    //         isComplete: false,
    //         userId: user.id,
    //         books: {bookId: bookId, amount: data[bookId]}
    //     }).write();
    // }
    for(var bookId in data){
        db.get('transactions').push({
            id: shortid.generate(),
            isComplete: false,
            userId: user.id,
            bookId: bookId
        }).write();
    }
    db.get('sessions').find({id : req.signedCookies.sessionId}).unset('cart').write();
    res.redirect('/transactions');
}