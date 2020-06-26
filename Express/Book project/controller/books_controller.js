const db=require('../db');
const shortid = require('shortid');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY_IMAGE, 
    api_secret: process.env.API_SECRET 
});
// show list books
module.exports.home=(req,res)=>{
    res.render('books/index',{
        books: db.get('books').value()
    });
};
// add books
module.exports.add=(req,res)=>{
    req.body.id=shortid.generate();
    // db.get('books').push(req.body).write();
    // res.redirect('/books');
    if(req.file===undefined){
        req.body.bookImgUrl="http://res.cloudinary.com/codersx0906/image/upload/v1593045870/tzpxk0kftxnq7ipapj0n.png";
        db.get('books').push(req.body).write();
        res.redirect('/books');
        return;
    }
    cloudinary.uploader.upload(req.file.path,(error, result)=>{
        if(result){
            req.body.bookImgUrl=result.url;
            db.get('books').push(req.body).write();
            res.redirect('/books');
        }
    });
};
// edit books
let id;
module.exports.editHome=(req,res)=>{
    id=req.params.id;
    let book=db.get('books').find({id:id}).value();
    res.render('books/edit',{
        books: book
    });
};
module.exports.editSave=(req,res)=>{
    db.get('books').find({id:id}).assign({title: req.body.title}).write();
    res.redirect('/books');
};
// delete book
module.exports.delete=(req,res)=>{
    id=req.params.id;
    db.get('books').remove({id : id}).write();
    res.redirect('/books');
};