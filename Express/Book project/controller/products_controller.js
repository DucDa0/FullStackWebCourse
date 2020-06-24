const db=require('../db');


let productTotal=db.get('products').size();
let perPage=8;
let pagesize;
let pagelength=5;
if(productTotal/perPage - parseInt(productTotal/perPage) > 0){
    pagesize=parseInt(productTotal/perPage)+1;
}
else{
    pagesize=parseInt(productTotal/perPage);
}
function getPagingRange(current, {min = 1, total = pagesize, length = pagelength} = {}) {
    if (length > total) length = total;
  
    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);
   
    return Array.from({length: length}, (el, i) => start + i);
}
module.exports.home=(req,res)=>{
    let page=parseInt(req.query.page) || 1;
    let start=(page-1)*perPage;
    let end=page*perPage;
   
    res.render('products/index',{
        products: db.get('products').value().slice(start,end),
        showPage: getPagingRange(page),
        currentPage: page,
        pageSize: pagesize,
        pageLength: pagelength
    });
};