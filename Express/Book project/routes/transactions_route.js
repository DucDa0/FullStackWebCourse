const express = require('express');
const router = express.Router();
const db=require('../db');
const shortid = require('shortid');
// show transactions
router.get('/',(req,res)=>{
    res.render('transactions/index',{
        transactions: db.get('transactions').value(),
        users: db.get('users').value(),
        books: db.get('books').value()
    })
})
//  add transactions
router.post('/create',(req,res)=>{
    req.body.id=shortid.generate();
    db.get('transactions').push(req.body).write();
    res.redirect('back');
})

module.exports=router;