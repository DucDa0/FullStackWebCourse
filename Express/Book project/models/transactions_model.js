const mongoose = require('mongoose');

const tranSchema = new mongoose.Schema({
    isComplete: Boolean,
    userId: String,
    items: [{
        shopId: String,
        books:[{
            bookId: String,
            amount: Number
        }]
    }]
});

const Tran = mongoose.model('Tran', tranSchema, 'transactions');

module.exports=Tran;