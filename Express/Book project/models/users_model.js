const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    pwd: String,
    wrongLoginCount: Number,
    avatarUrl: String,
    shopUrl: String
});

const User = mongoose.model('User', userSchema, 'users');

module.exports=User;