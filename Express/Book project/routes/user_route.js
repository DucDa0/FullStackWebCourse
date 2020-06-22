const express = require('express');
const router = express.Router();
//  validate
const validateUsers=require('../validate/users_validate');
// controller
const usersController=require('../controller/users_controller');

// show users list
router.get('/', usersController.home);
// add users
router.post('/add', validateUsers.add, usersController.add);
// edit user
router.get('/:id/edit', usersController.editHome);
router.post('/save', validateUsers.edit, usersController.editSave);
// delete user
router.get('/:id/delete', usersController.delete);

module.exports=router;