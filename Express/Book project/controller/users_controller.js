const db=require('../db');
const shortid = require('shortid');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY_IMAGE, 
    api_secret: process.env.API_SECRET 
});
// show users list
module.exports.home=(req,res)=>{
    res.render('users/index',{
        users: db.get('users').value()
    });
};
// add users
module.exports.add=(req,res)=>{
   
    req.body.id=shortid.generate();
    if(req.file===undefined){
        req.body.avatarUrl="http://res.cloudinary.com/codersx0906/image/upload/v1593045870/tzpxk0kftxnq7ipapj0n.png";
        db.get('users').push(req.body).write();
        res.redirect('/users');
        return;
    }
    cloudinary.uploader.upload(req.file.path,(error, result)=>{
        if(result){
            req.body.avatarUrl=result.url;
            db.get('users').push(req.body).write();
            res.redirect('/users');
        }
    });
};
// delete user
let id;
module.exports.delete=(req,res)=>{
    id=req.params.id;
    db.get('users').remove({id:id}).write();
    res.redirect('/users');
};
// profile
module.exports.profile=(req,res)=>{
    id=req.params.id;
    let user=db.get('users').find({id:id}).value();
    res.render('users/profile',{
        users: user
    });
}
// profile update
module.exports.editSave=(req,res)=>{
    db.get('users').find({id:id}).assign({name: req.body.name}).write();
    res.redirect('/users');
};
// profile avatar
module.exports.profileAvatar=(req,res)=>{
    let user=db.get('users').find({id:id}).value();
    res.render('users/profileAvatar',{
        users: user
    });
}
// profile avatar upload to cloudinary
module.exports.profileAvatarUpload=(req,res)=>{
    cloudinary.uploader.upload(req.file.path,(error,result)=>{
        if(res){
            db.get('users').find({id:id}).assign({avatarUrl: result.url}).write();
            res.render('users/profile',{
                users: db.get('users').find({id:id}).value()
            });
        }
    });
}