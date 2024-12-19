const router = require('express').Router();
const userController = require('../controllers/user.controller');

// to create a user
router.post('/', userController.createUser);

// to login a user
router.post('/login', userController.loginUser);


// to update a user
router.put('/:id', userController.updateUser);


module.exports = router;