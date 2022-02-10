// express, router, export
const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');

// routes
router.get('/api/users', usersController.usersIndex);
router.get('/api/users/age/:age', usersController.users35);
router.get('/api/users/id/:userId', usersController.getUserById);
router.get('/api/users/town/:townString', usersController.getUserTownString);
router.post('/api/users/new', usersController.addUser);

module.exports = router;
