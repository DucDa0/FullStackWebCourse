const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    _id: String,
    cart: Array
});

const Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports=Session;