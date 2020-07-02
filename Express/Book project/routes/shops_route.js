const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });
const shopController=require('../controller/shops_controller');
const authMiddlewares = require('../validate/auth_validate');
router.get('/create', authMiddlewares.authRequire,shopController.create);
router.post('/create', authMiddlewares.authRequire, upload.single('shopImgUrl'),shopController.createPost);
router.get('/manageBooks', authMiddlewares.authRequire, shopController.manageBooks);
router.post('/manageBooks/add', authMiddlewares.authRequire,  upload.single('bookImg'),shopController.add);
router.get('/:id/books', shopController.shop);

module.exports=router;