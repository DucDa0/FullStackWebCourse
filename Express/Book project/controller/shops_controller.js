const Shop=require('../models/shops_model');
const Session=require('../models/sessions_model');
const User = require('../models/users_model');
const cloudinary = require('cloudinary').v2;
const shortid = require('shortid');
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY_IMAGE, 
    api_secret: process.env.API_SECRET 
});


module.exports.create=async(req,res)=>{
    res.render('shops/create');
}
module.exports.createPost=async(req,res)=>{
    req.body.products=[];
    req.body.orders=[];
    req.body.ownerId=req.signedCookies.userId;
    if(req.file===undefined){
        req.body.shopImgUrl="http://res.cloudinary.com/codersx0906/image/upload/v1593045870/tzpxk0kftxnq7ipapj0n.png";
        await Shop.insertMany(req.body,async(err,docs)=>{
            if(!err){
                let user = await User.findById({_id:req.signedCookies.userId}).exec();
                user.shopUrl="http://localhost:3000/shop/"+docs[0]._id+"/books";
                user.markModified('shopUrl');
                await user.save();
                res.redirect('/shop/'+ docs[0]._id+'/books')
            }
        });
        return;
    }
    cloudinary.uploader.upload(req.file.path,async(error, result)=>{
        if(!error){
            req.body.shopImgUrl=result.url;
            await Shop.insertMany(req.body,async(err,docs)=>{
                if(!err){
                    let user = await User.findById({_id:req.signedCookies.userId}).exec();
                    user.shopUrl="http://localhost:3000/shop/"+docs[0]._id+"/books";
                    user.markModified('shopUrl');
                    await user.save();
                    res.redirect('/shop/'+ docs[0]._id+'/books')
                }
            });
            return;
        }
    });
}
let id;
module.exports.shop=async(req,res)=>{
    id=req.params.id;
    let shop=await Shop.findById({_id:id}).exec();
    let products=shop.get('products');
    // let orders=shop.get('orders');
    let sess=await Session.findById({_id:req.signedCookies.sessionId}).exec();
    if(!sess.get('stayedShop')){
        sess._doc.stayedShop={};
        sess.get('stayedShop')['shopId']= shop.id;
        sess.markModified('stayedShop');
        await sess.save();
    }
    else{
        if(sess.get('stayedShop').shopId!==shop.id){
            sess.get('stayedShop')['shopId']= shop.id;
            sess.markModified('stayedShop');
            await sess.save();
        }
    }
  
    let user = await User.findOne({_id:req.signedCookies.userId}).exec();
    var check;
    if(user){
        check= user.id!==shop.ownerId ? false:true;
    }else{
        check=false
    }
    res.render('shops/index',{
        shop: shop,
        products: products,
        check: check
    });
}

module.exports.manageBooks=async(req,res)=>{
    let shop=await Shop.findOne({ownerId:req.signedCookies.userId}).exec();
    let products=shop.get('products');
    let user = await User.findOne({_id:req.signedCookies.userId}).exec();
    var check;
    if(user){
        check= user.id!==shop.ownerId ? false:true;
    }else{
        check=false
    }
    res.render('shops/manageBooks',{
        shop: shop,
        books: products,
        check: check
    })
}
module.exports.add= async (req,res)=>{
    var shop=await Shop.findOne({ownerId:req.signedCookies.userId}).exec();
    var products=shop.get('products');
    if(req.file===undefined){
        products.push({
            id: shortid.generate(),
            title: req.body.title,
            description: req.body.description,
            bookImgUrl: "http://res.cloudinary.com/codersx0906/image/upload/v1593045870/tzpxk0kftxnq7ipapj0n.png"
        });
        shop.markModified('products');
        await shop.save();
        res.redirect('/shop/manageBooks');
        return;
    }
    cloudinary.uploader.upload(req.file.path,async (error, result)=>{
        if(!error){
            products.push({
                id: shortid.generate(),
                title: req.body.title,
                description: req.body.description,
                bookImgUrl: result.url
            });
            shop.markModified('products');
            await shop.save();
            res.redirect('/shop/manageBooks');
            return;
        }
    });
};

module.exports.manageTrans=async(req,res)=>{
    let shop=await Shop.findOne({ownerId:req.signedCookies.userId}).exec();
    let orders=shop.get('orders');
    let user = await User.findOne({_id:req.signedCookies.userId}).exec();
    var check;
    if(user){
        check= user.id!==shop.ownerId ? false:true;
    }else{
        check=false
    }
    res.render('shops/manageTrans',{
        shop: shop,
        orders: orders,
        check: check
    })
}