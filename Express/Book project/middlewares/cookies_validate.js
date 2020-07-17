// count cookies
let cookies=[];
let countedCookies = {};
module.exports.countCookies=(req,res,next)=>{
    cookies.push(req.cookies);
    countedCookies['user-id']=cookies.length;
    console.log(countedCookies);
    next();
}