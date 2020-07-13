const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    _id: String,
    cart: [{
        bookId: String,
        amount: Number,
        shopId: String
    }]
});

const Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports=Session;