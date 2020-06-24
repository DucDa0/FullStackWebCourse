const express = require('express');
const router = express.Router();
const productsController=require('../controller/products_controller');

router.get('/', productsController.home);

module.exports=router;
