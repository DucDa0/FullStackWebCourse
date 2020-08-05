const express = require('express');
const router = express.Router();
const booksController=require('../../api/controllers/books_controller');

router.get('/', booksController.home);

module.exports=router;
