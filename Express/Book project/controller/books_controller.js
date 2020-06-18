const db=require('../db');
const shortid = require('shortid');

// show list books
module.exports.home=(req,res)=>{
    res.render('books/index',{
        books: db.get('books').value()
    });
};
// add books
module.exports.add=(req,res)=>{
    req.body.id=shortid.generate();
    db.get('books').push(req.body).write();
    res.redirect('back');
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
    res.redirect('back');
};