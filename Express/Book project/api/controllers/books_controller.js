const Book = require('../../models/books_model');
module.exports.home=async (req,res)=>{
    const books=await Book.find().exec();
    res.json(books);
}