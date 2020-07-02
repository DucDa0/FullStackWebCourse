// const db=require('../db');
// const shortid = require('shortid');
const Book = require('../models/books_model');
const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY_IMAGE, 
    api_secret: process.env.API_SECRET 
});
let perPage=6;
let pageSize;
let pageLength=5;
Book.estimatedDocumentCount((err, count) => { 
    if (err){ 
        console.log(err) 
    }else{
        if(count/perPage - parseInt(count/perPage) > 0){
            pageSize=parseInt(count/perPage)+1;
        }
        else{
            pageSize=parseInt(count/perPage);
        }
    }
}); 
function getPagingRange(current, {min = 1, total = pageSize, length = pageLength} = {}) {
    if (length > total) length = total;
  
    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);
   
    return Array.from({length: length}, (el, i) => start + i);
}
// show list books
module.exports.home=async (req,res)=>{
    let page=parseInt(req.query.page) || 1;
    let start=(page-1)*perPage;
    let end=page*perPage;
    let books = await Book.find();
    res.render('books/index',{
        books: books.slice(start,end),
        showPage: getPagingRange(page),
        currentPage: page,
        pageSize: pageSize,
        pageLength: pageLength
    });
};
// add books
module.exports.add= async (req,res)=>{
    // req.body.id=shortid.generate();
    if(req.file===undefined){
        req.body.bookImgUrl="http://res.cloudinary.com/codersx0906/image/upload/v1593045870/tzpxk0kftxnq7ipapj0n.png";
        await Book.insertMany(req.body);
        // db.get('books').push(req.body).write();
        res.redirect('/books');
        return;
    }
    cloudinary.uploader.upload(req.file.path,async (error, result)=>{
        if(!error){
            req.body.bookImgUrl=result.url;
            await Book.insertMany(req.body);
            // db.get('books').push(req.body).write();
            res.redirect('/books');
        }
    });
};
// edit books
let id;
module.exports.editHome=async (req,res)=>{
    id=req.params.id;
    // let book=db.get('books').find({id:id}).value();
    let book= await Book.findById({_id : id}).exec();
    res.render('books/edit',{
        books: book
    });
};
module.exports.editSave=async (req,res)=>{
    // db.get('books').find({id:id}).assign({title: req.body.title}).write();
    await Book.findOneAndUpdate({_id : id},{title: req.body.title}).exec();
    res.redirect('/books');
};
// delete book
module.exports.delete=async(req,res)=>{
    id=req.params.id;
    // db.get('books').remove({id : id}).write();
    await Book.findOneAndDelete({_id : id}).exec();
    res.redirect('/books');
};