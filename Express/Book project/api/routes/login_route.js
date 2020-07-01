const express = require('express');
const router = express.Router();
const Controller=require('../../api/controllers/login_controller');

router.get('/', Controller.home);
router.post('/', Controller.postLogin);
module.exports=router;