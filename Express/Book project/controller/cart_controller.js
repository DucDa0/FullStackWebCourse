// const db=require('../db');
const shortid = require('shortid');
const Shop=require('../models/shops_model');
const Session=require('../models/sessions_model');
const Book = require('../models/books_model');
const User = require('../models/users_model');
const Tran = require('../models/transactions_model');
var shopId;
//  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
module.exports.cartHome=async (req,res)=>{
    if(shopId===undefined){
        res.render('cart/error',{
            Cart:false
        })
        return;
    }
    // var yourCart=db.get('sessions').find({id : req.signedCookies.sessionId}).get('cart').value();
    var yourCart= await Session.findById({_id:req.signedCookies.sessionId}).exec();
    var shop=await Shop.findById({_id:shopId}).exec();
    let user = await User.findOne({_id:req.signedCookies.userId}).exec();
    var check;
    if(user){
        check= user.id!==shop.ownerId ? false:true;
    }else{
        check=false
    }
    if(!yourCart.get('cart')){
        res.render('cart/error',{
            Cart:false
        })
        return;
    }
    // var books=db.get('books').value();
    // var books=await Book.find();
    
    var data=[];
    var tmp={};
    for(var i of yourCart.get('cart')){
        let proShop= Shop.findById({_id: i.shopId}).exec();
        let products=proShop.get('products');
        tmp={
            book: products.find(item=>item.id===i.bookId),
            amount: i.amount
        }
        data.push(tmp);
    }
    res.render('cart/index',{
        Cart: data,
        shop: shop,
        check: check
    });
}
module.exports.addToCart=async (req,res,next)=>{
    var productId=req.params.productId;
    shopId=req.params.shopId;
    var sessionId=req.signedCookies.sessionId;
    var yourCart=await Session.findById({_id:sessionId}).exec();
    if(!sessionId){
        res.redirect('/shop/'+shopId+'/books');
        return;
    }
    // let count=db.get('sessions').find({id : sessionId}).get('cart.'+ productId, 0).value();
    // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    if(!yourCart.get('cart')){
        yourCart._doc.cart=[];
        yourCart.get('cart').push({bookId:productId,amount:1, shopId: shopId});
        yourCart.markModified('cart');
        await yourCart.save();
        return res.redirect('/shop/'+shopId+'/books');
    }
    else{
        let cartItem=yourCart.get('cart').find(item=>item.bookId===productId);
        if(!cartItem){
            yourCart.get('cart').push({bookId: productId, amount: 1, shopId: shopId});
            yourCart.markModified('cart');
            await yourCart.save();
            return res.redirect('/shop/'+shopId+'/books');
        }
        cartItem.amount+=1;
        yourCart.markModified('cart');
        await yourCart.save();
        return res.redirect('/shop/'+shopId+'/books');
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
    var cart=data.get('cart');
    var tmp=[];
    var shopBuyed=[];
    for(let shop of cart){
        if(!shopBuyed.includes(shop.shopId)){
            shopBuyed.push(shop.shopId);
        }
    }
    for(let idS of shopBuyed){
        let ok=cart.filter(item=>item.shopId===idS);
        let okk=[];
        for(let item of ok){
            okk.push({
                bookId: item.bookId,
                amount: item.amount
            })
        }
        tmp.push({
            shopId: idS,
            books: okk
        })
    }
    await Tran.insertMany({
        isComplete: false,
        userId: user.id,
        items: tmp    
    });
    // db.get('sessions').find({id : req.signedCookies.sessionId}).unset('cart').write();
    await Session.findOneAndUpdate({_id:req.signedCookies.sessionId},{cart:null}).exec();
    res.redirect('/shop/'+shopId+'/books');
}