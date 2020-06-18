const express = require('express');
const router = express.Router();
const db=require('../db');
const shortid = require('shortid');
// show list books
router.get('/',(req,res)=>{
    res.render('books/index',{
        books: db.get('books').value()
    })
})
// add books
router.post('/add',(req,res)=>{
    req.body.id=shortid.generate();
    db.get('books').push(req.body).write();
    res.redirect('back');
})
// edit books
let id;
router.get('/:id/edit',(req,res)=>{
    id=req.params.id;
    let book=db.get('books').find({id:id}).value();
    res.render('books/edit',{
        books: book
    })
})
router.post('/save',(req,res)=>{
    db.get('books').find({id:id}).assign({title: req.body.title}).write();
    res.redirect('/books');
})
// delete books
router.get('/:id/delete',(req,res)=>{
    id=req.params.id;
    db.get('books').remove({id : id}).write();
    res.redirect('back');
})

module.exports=router;
