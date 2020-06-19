const express = require('express');

const usersControllers = require('../../controllers/v1/users-controller');

const router = express.Router();

router.post('/create' , usersControllers.createUser);
router.post('/update' , usersControllers.updateUser);
router.post('/delete' , usersControllers.deleteUser);
router.post('/get-all' , usersControllers.getUsers);

module.exports =router;
