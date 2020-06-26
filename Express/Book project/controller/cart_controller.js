const db=require('../db');
const shortid = require('shortid');
module.exports.cartHome=(req,res)=>{
    var yourCart=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').value();
    if(!yourCart){
        res.render('cart/index',{
            Cart: false
        });
        return;
    }
    var books=db.get('books').value();
    var data=[];
    var tmp={};
    for(var book of books){
        if(book.id in yourCart){
            
            tmp={
                book: book,
                amount: yourCart[book.id]
            }
            data.push(tmp);
        }
    }
    res.render('cart/index',{
        Cart: data
    });
}
module.exports.addToCart=(req,res,next)=>{
    let productId=req.params.productId;
    let sessionId=req.signedCookies.sessionId;
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    let count=db.get('sessions').find({id : sessionId}).get('cart.'+ productId, 0).value();
    db.get('sessions').find({id : sessionId}).set('cart.'+ productId, count + 1).write();
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