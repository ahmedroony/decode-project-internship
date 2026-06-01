const express = require('express');
const router = express.Router();
// Import the userController to handle the logic for user
const userController = require('../controllers/userController');
// Define the routes for user
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.editUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
