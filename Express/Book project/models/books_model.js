const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type:String, required: true, trim: true},
    description: {type: String, trim: true, minlength: 0, maxlength: 200},
    bookImgUrl: {type: String, required: false}
});

const Book = mongoose.model('Book', bookSchema, 'books');

module.exports=Book;