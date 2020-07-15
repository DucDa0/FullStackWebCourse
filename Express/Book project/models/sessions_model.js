const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    _id: String,
    createDate: {type: Date, default: Date.now}
});

const Session = mongoose.model('Session', sessionSchema, 'sessions');

module.exports=Session;