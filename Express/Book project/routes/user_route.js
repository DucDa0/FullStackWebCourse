const express = require('express');
const router = express.Router();
// controller
const usersController=require('../controller/users_controller');
// show users list
router.get('/', usersController.home);
// add users
router.post('/add', usersController.add);
// edit user
router.get('/:id/edit', usersController.editHome);
router.post('/save', usersController.editSave);
// delete user
router.get('/:id/delete', usersController.delete);

module.exports=router;