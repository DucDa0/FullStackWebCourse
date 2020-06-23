const express = require('express');
const router = express.Router();
// controller
const authController=require('../controller/auth_controller');

router.get('/login', authController.login);
router.post('/login', authController.postLogin);

module.exports=router;