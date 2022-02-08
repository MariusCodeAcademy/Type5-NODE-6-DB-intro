// express, router, export
const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');

// routes
router.get('/api/users', usersController.usersIndex);

module.exports = router;
