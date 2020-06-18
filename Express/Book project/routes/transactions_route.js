const express = require('express');
const router = express.Router();
// controller
const transController=require('../controller/transactions_controller');
// show transactions
router.get('/', transController.home);
//  add transactions
router.post('/create', transController.create);
//  complete trans
router.get('/:id/complete', transController.isComplete);
module.exports=router;