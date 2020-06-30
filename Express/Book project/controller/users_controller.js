// const db=require('../db');
// const shortid = require('shortid');
const User = require('../models/users_model');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY_IMAGE, 
    api_secret: process.env.API_SECRET 
});
// show users list
module.exports.home=async (req,res)=>{
    let users= await User.find()
    res.render('users/index',{
        users: users
    });
};
// add users
module.exports.add=async (req,res)=>{
   
    // req.body.id=shortid.generate();
    if(req.file===undefined){
        req.body.avatarUrl="http://res.cloudinary.com/codersx0906/image/upload/v1593045870/tzpxk0kftxnq7ipapj0n.png";
        // db.get('users').push(req.body).write();
        await User.insertMany(req.body);
        res.redirect('/users');
        return;
    }
    cloudinary.uploader.upload(req.file.path,async(error, result)=>{
        if(result){
            req.body.avatarUrl=result.url;
            // db.get('users').push(req.body).write();
            await User.insertMany(req.body);
            res.redirect('/users');
        }
    });
};
// delete user
let id;
module.exports.delete=async(req,res)=>{
    id=req.params.id;
    // db.get('users').remove({id:id}).write();
    await User.findOneAndDelete({_id : id}).exec();
    res.redirect('/users');
};
// profile
module.exports.profile=async(req,res)=>{
    id=req.params.id;
    // let user=db.get('users').find({id:id}).value();
    let user= await User.findById({_id : id}).exec();
    res.render('users/profile',{
        users: user
    });
}
// profile update
module.exports.editSave=async(req,res)=>{
    // db.get('users').find({id:id}).assign({name: req.body.name}).write();
    await User.findOneAndUpdate({_id : id},{name: req.body.name}).exec();
    res.redirect('/users');
};
// profile avatar
module.exports.profileAvatar=async(req,res)=>{
    // let user=db.get('users').find({id:id}).value();
    let user= await User.findById({_id : id}).exec();
    res.render('users/profileAvatar',{
        users: user
    });
}
// profile avatar upload to cloudinary
module.exports.profileAvatarUpload=async(req,res)=>{
    cloudinary.uploader.upload(req.file.path,async(error,result)=>{
        if(res){
            // db.get('users').find({id:id}).assign({avatarUrl: result.url}).write();
            await User.findOneAndUpdate({_id : id},{avatarUrl: result.url}).exec();
            res.render('users/profile',{
                users: await User.findById({_id : id}).exec()
            });
        }
    });
}