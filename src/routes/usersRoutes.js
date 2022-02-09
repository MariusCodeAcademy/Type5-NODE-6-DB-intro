// express, router, export
const express = require('express');

const router = express.Router();
const usersController = require('../controllers/usersController');

// routes
router.get('/api/users', usersController.usersIndex);

router.get('/api/users/age/:age', usersController.users35);

// GET /api/users/id/:userId (vartotojo objekta kurio _id === :userId)
router.get('/api/users/id/:userId', usersController.getUserById);

// GET /api/users/james (vartotojo objekta kurio vardas yra james)

// GET /api/users/town/london (grazinam vartotojus is londono)

// GET /api/users/age/gt33 (grazinam vartotojus kuriu amzius daugiau nei 33)

// GET /api/users/age/:age (grazinam vartotojus kuriu amzius daugiau nei :age)

router.post('/api/users/new', usersController.addUser);

module.exports = router;
