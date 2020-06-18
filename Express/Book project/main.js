const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','pug');
app.set('views','./views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const shortid = require('shortid');

// show list books
app.get('/books',(req,res)=>{
    res.render('books/index',{
        books: db.get('books').value()
    })
})
// add books
app.post('/books/add',(req,res)=>{
    req.body.id=shortid.generate();
    db.get('books').push(req.body).write();
    res.redirect('back');
})
// edit books
let id;
app.get('/books/:id/edit',(req,res)=>{
    id=req.params.id;
    let book=db.get('books').find({id:id}).value();
    res.render('books/edit',{
        books: book
    })
})
app.post('/books/save',(req,res)=>{
    db.get('books').find({id:id}).assign({title: req.body.title}).write();
    res.redirect('/books');
})
// delete books
app.get('/books/:id/delete',(req,res)=>{
    let id=req.params.id;
    db.get('books').remove({id : id}).write();
    res.redirect('back');
})










app.listen(port,()=>{
    console.log('Server listening on port ' + port);
});
function nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}