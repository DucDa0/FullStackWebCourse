require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false, useCreateIndex: true});
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 3000;
const booksRoute=require('./routes/books_route');
const usersRoute=require('./routes/user_route');
const transRoute=require('./routes/transactions_route');
const homeRoute=require('./routes/home_route');
const authRoute=require('./routes/auth_route');
const productsRoute=require('./routes/products_route');
const cartRoute=require('./routes/cart_route');
// const cookiesValidate=require('./validate/cookies_validate');
const authMiddlewares = require('./validate/auth_validate');
const sessionMiddleware=require('./validate/session_validate');

const app = express();

app.set('view engine','pug');
app.set('views','./views');
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessionMiddleware);
app.use(express.static('public'));
// app.use('/', cookiesValidate.countCookies, homeRoute);
app.use('/', homeRoute);
app.use('/books', authMiddlewares.authRequire, booksRoute);
app.use('/users', authMiddlewares.authRequire, usersRoute);
app.use('/transactions', authMiddlewares.authRequire, transRoute);
app.use('/products', productsRoute);
app.use('/auth', authRoute);
app.use('/cart', cartRoute);

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
/**
 * LowDb được xây dựng trên Lodash, xem qua lodash để dùng được nhiều cái hay
 */