const mongoose = require('mongoose');

const tranSchema = new mongoose.Schema({
    isComplete: Boolean,
    userId: String,
    items: Array
});

const Tran = mongoose.model('Tran', tranSchema, 'transactions');

module.exports=Tran;