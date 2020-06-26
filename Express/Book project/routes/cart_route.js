const express = require('express');
const router = express.Router();
// controller
const cartController=require('../controller/cart_controller');

router.get('/add/:productId', cartController.addToCart);


module.exports=router;