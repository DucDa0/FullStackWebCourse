// const db=require('../db');
const Book = require('../models/books_model');
// https://www.mockaroo.com/
let perPage=8;
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
module.exports.home = async (req,res)=>{
    let page=parseInt(req.query.page) || 1;
    let start=(page-1)*perPage;
    let end=page*perPage;
    // res.render('products/index',{
    //     products: db.get('books').value().slice(start,end),
    //     showPage: getPagingRange(page),
    //     currentPage: page,
    //     pageSize: pageSize,
    //     pageLength: pageLength
    // });
    let books = await Book.find();
    res.render('products/index',{
        products: books.slice(start,end),
        showPage: getPagingRange(page),
        currentPage: page,
        pageSize: pageSize,
        pageLength: pageLength
    })
};