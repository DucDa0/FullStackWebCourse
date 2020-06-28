const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    bookImgUrl: String
});

const Book = mongoose.model('Book', bookSchema, 'books');

module.exports=Book;