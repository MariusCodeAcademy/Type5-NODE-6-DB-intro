const express = require('express');

const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/api/books', booksController.booksIndex);
// POST /api/books/add (grazina ka gauna i req.body)
router.post('/api/books/add', booksController.addBook);

module.exports = router;
