const express = require('express');

const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/api/books', booksController.booksIndex);
// POST /api/books/add (grazina ka gauna i req.body)

module.exports = router;
