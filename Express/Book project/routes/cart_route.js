const express = require('express');
const router = express.Router();
// controller
const cartController=require('../controller/cart_controller');
router.get('/index', cartController.cartHome);
router.get('/add/:shopId/:productId', cartController.addToCart);
router.get('/complete', cartController.cartComplete);
module.exports=router;