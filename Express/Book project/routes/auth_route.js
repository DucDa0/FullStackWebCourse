const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });
// controller
const authController=require('../controller/auth_controller');

router.get('/login', authController.login);
router.post('/login', authController.postLogin);

router.get('/register', authController.register);
router.post('/register/add',  authController.postRegister);

router.get('/logout', authController.logOut);
module.exports=router;