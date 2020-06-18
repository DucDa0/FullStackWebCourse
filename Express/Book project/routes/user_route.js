const express = require('express');
const router = express.Router();
const db=require('../db');
const shortid = require('shortid');
// show users list
router.get('/',(req,res)=>{
    res.render('users/index',{
        users: db.get('users').value()
    })
})
// add users
router.post('/add',(req,res)=>{
    req.body.id=shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('back');
})
// edit user
let id;
router.get('/:id/edit',(req,res)=>{
    id=req.params.id;
    let user=db.get('users').find({id:id}).value();
    res.render('users/edit',{
        users: user
    })
})
router.post('/save',(req,res)=>{
    db.get('users').find({id:id}).assign({name: req.body.name}).write();
    res.redirect('/users');
})
// delete user
router.get('/:id/delete',(req,res)=>{
    id=req.params.id;
    db.get('users').remove({id:id}).write();
    res.redirect('back');
})

module.exports=router;