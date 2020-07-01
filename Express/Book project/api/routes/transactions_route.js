const express = require('express');
const router = express.Router();
const transController=require('../../api/controllers/transactions_controller');

router.get('/', transController.home);

module.exports=router;