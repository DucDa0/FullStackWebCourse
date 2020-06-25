const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })
//  validate
const validateUsers=require('../validate/users_validate');
// controller
const usersController=require('../controller/users_controller');

// show users list
router.get('/', usersController.home);
// add users
router.post('/add', upload.single('avatar'), validateUsers.add, usersController.add);
// delete user
router.get('/:id/delete', usersController.delete);
//  profile
router.get('/profile/:id', usersController.profile);
//  profile update
router.post('/save',  validateUsers.edit, usersController.editSave);
//  profile avatar
router.get('/profileAvatar/:id', usersController.profileAvatar);
// upload profile avatar
router.post('/profileAvatarUpload',  upload.single('avatar'), usersController.profileAvatarUpload);
module.exports=router;